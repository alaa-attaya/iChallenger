<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log; 
use Illuminate\Support\Carbon;
use App\Http\Controllers\EmailController;
use App\Models\Report;
use App\Models\Region;
use App\Models\User;
use App\Models\Post;
use App\Models\ContactUs;
use App\Models\Game;
use App\Models\GameForum;
use App\Models\GameMode;
use App\Models\Leaderboard;
use App\Models\Team;
use App\Models\TeamMember;
use App\Models\Tournament;
use App\Models\TournamentType;
use App\Models\TournamentWinner;
use App\Models\Matching;
use App\Models\Bracket;
class AdminController extends Controller
{
    public function banUser(Request $request)
    {   
        $identifier = $request->input('identifier'); 
        $user = User::where('email', $identifier)->orWhere('username', $identifier)->first();
        
        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }
        
        $user->is_banned = 1;
        $user->save();
        
        return response()->json(['message' => 'User has been banned.']);
    }
    
    public function unbanUser(Request $request)
    {   
        $identifier = $request->input('identifier'); 
        $user = User::where('email', $identifier)->orWhere('username', $identifier)->first();
        
        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }
        
        $user->is_banned = 0;
        $user->save();
        
        return response()->json(['message' => 'User has been unbanned.']);
    }
    
    public function sendEmail(Request $request)
    {
        
        $request->validate([
            'to' => 'required|email',
            'subject' => 'required|string',
            'body' => 'required|string',
        ]);

        
        $to = $request->input('to');
        $subject = $request->input('subject');
        $body = $request->input('body');
        $isTransactional = true; 

        
        $from = 'ichallenger@zohomail.com';
        $fromName = 'Admin - iChallenger';

        
        $emailController = new EmailController();

        
        $response = $emailController->sendEmail($from, $fromName, $to, $subject, $body, $isTransactional);

       
        return response()->json(['message' => $response]);
    }
    
    public function getReports(Request $request)
    {
        $user = Auth::user();
        $search = $request->input('search');
    
        $reports = Report::with('user', 'reportedUser');
    
        if ($search) {
            $reports->where(function ($query) use ($search) {
                $query->whereHas('user', function ($subquery) use ($search) {
                    $subquery->where('username', 'like', $search . '%')
                        ->orWhere('email', 'like', $search . '%');
                })->orWhereHas('reportedUser', function ($subquery) use ($search) {
                    $subquery->where('username', 'like', $search . '%')
                        ->orWhere('email', 'like', $search . '%');
                });
            });
        }
    
        $reportsData = $reports->get();
    
        
        $reportCounts = [];
    
        foreach ($reportsData as $report) {
            $reportedUserId = $report->reportedUser->id;
    
            if (!isset($reportCounts[$reportedUserId])) {
                $reportCounts[$reportedUserId] = 0;
            }
    
            $reportCounts[$reportedUserId]++;
        }
    
       
        foreach ($reportsData as $report) {
            $reportedUserId = $report->reportedUser->id;
            $report->reports_count = $reportCounts[$reportedUserId];
        }
    
        return response()->json([
            'status' => 'Success',
            'data' => $reportsData,
        ]);
    }
    

    

  
    //Create Game
    public function createGame(Request $request)
{
    $request->validate([
        'name' => 'required|string|unique:games',
        'game_modes' => 'required|json',
        'gameimage' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $game = new Game([
        'name' => $request->input('name'),
    ]);

    if ($request->hasFile('gameimage')) {
        $gameImagePath = $request->file('gameimage')->store('public/games/');
        $game->gameimage = "/storage" . str_replace('public', '', $gameImagePath);
    } else {
        $game->gameimage = '/storage/images/UploadImage.png';
    }

    $game->save();

    $forum = $game->forum()->create([
        'name' => $game->name,
    ]);

    
    $gameModes = json_decode($request->input('game_modes'), true);

    foreach ($gameModes as $mode) {
        $gameMode = new GameMode([
            'name' => $mode['name'],
            'max_players_per_team' => $mode['max_players_per_team'],
        ]);
        $game->gameModes()->save($gameMode);
    }

    return response()->json(['status' => 'Success', 'message' => 'Game created successfully', 'data' => $game]);
}

    

   

    
    public function updateGame(Request $request)
    {
        $id = $request->input('id');
        $request->validate([
            'name' => 'required|string|unique:games,name,' . $id,
            'game_modes' => 'required|json',
            'gameimage' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $game = Game::find($id);

        if (!$game) {
            return response()->json(['status' => 'Error', 'message' => 'Game not found'], 404);
        }

        
        $newName = $request->input('name');
        $game->name = $newName;

    
        $gameForum = $game->forum;
        if ($gameForum) {
            $gameForum->name = $newName;
            $gameForum->save();
        }

        $requestedGameModes = json_decode($request->input('game_modes'), true);
        $game->gameModes()->delete();

        foreach ($requestedGameModes as $requestedGameMode) {
            $gameMode = new GameMode([
                'name' => $requestedGameMode['name'],
                'max_players_per_team' => $requestedGameMode['max_players_per_team'],
            ]);
            $game->gameModes()->save($gameMode);
        }

        if ($request->hasFile('gameimage')) {
            $gameImagePath = $request->file('gameimage')->store('public/games/');
            $game->gameimage = "/storage" . str_replace('public', '', $gameImagePath);
        }

        $game->save();

        return response()->json(['status' => 'Success', 'message' => 'Game updated successfully', 'data' => $game]);
    }



    public function updateLeaderboard(Request $request)
    {
        $userId = $request->input('user_id');

       
        $user = User::find($userId);

        if (!$user) {
            return response()->json([
                'status' => 'Error',
                'message' => 'User not found.',
            ], 404);
        }

        $request->validate([
            'won' => 'integer',
            'lost' => 'integer',
            'points' => 'integer',
        ]);

        
        $user->leaderboard()->update($request->only('won', 'lost', 'points'));

        return response()->json([
            'status' => 'Success',
            'message' => 'Leaderboard updated successfully.',
        ]);
    }

    
    public function createTournament(Request $request)
    {
       
        $request->validate([
            'name' => 'required|string',
            'game_id' => 'required|exists:games,id',
            'game_mode_id' => 'required|exists:game_modes,id',
            'tournament_type_id' => 'required|exists:tournament_types,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'tournament_size' => 'required|integer|min:2',
            'tournament_points' => 'required|integer',
            'rules'=>'required|string',
            'tournament_region'=>'required|string',
        ]);
    
       
        $tournament = Tournament::create($request->all());
    
        return response()->json([
            'status' => 'Success',
            'message' => 'Tournament created successfully.',
            'data' => $tournament,
        ], 201);
    }

        public function updateTournament(Request $request)
    {  
        $tournamentId=$request->input('tournamentId');
        $tournament = Tournament::find($tournamentId);

        if (!$tournament) {
            return response()->json([
                'status' => 'Error',
                'message' => 'Tournament not found.',
            ], 404);
        }

       
        $request->validate([
            'name' => 'string',
            'game_id' => 'exists:games,id',
            'game_mode_id' => 'exists:game_modes,id',
            'tournament_type_id' => 'exists:tournament_types,id',
            'start_date' => 'date',
            'end_date' => 'date|after:start_date',
            'tournament_size' => 'integer|min:2',
            'tournament_points' => 'integer',
            'rules'=>'string',
            'tournament_region'=>'string',
        ]);

       
        $tournament->update($request->all());

        return response()->json([
            'status' => 'Success',
            'message' => 'Tournament updated successfully.',
            'data' => $tournament,
        ]);
    }
        public function createMatch(Request $request)
    {
        
        $request->validate([
            'bracket_id' => 'required|exists:brackets,id',
            'match_date' => 'required|date',
        ]);

        
        $match = Matching::create($request->all());

        return response()->json([
            'status' => 'Success',
            'message' => 'Match created successfully.',
            'data' => $match,
        ], 201);
    }
        public function markMatchAsComplete(Request $request, $matchId)
    {
        
        $match = Matching::find($matchId);

        if (!$match) {
            return response()->json([
                'status' => 'Error',
                'message' => 'Match not found.',
            ], 404);
        }

        
        $match->update(['is_completed' => true]);

        return response()->json([
            'status' => 'Success',
            'message' => 'Match marked as complete successfully.',
            'data' => $match,
        ]);
    }

        public function createTeam(Request $request)
    {
       
        $request->validate([
            'name' => 'required|string',
        ]);

       
        $team = Team::create($request->all());

        return response()->json([
            'status' => 'Success',
            'message' => 'Team created successfully.',
            'data' => $team,
        ], 201);
    }
   
    public function getData()
    {
        $totalUsers = User::where('user_role_id', '<>', 1)->count();
        $totalTournaments = Tournament::count();
        $totalPosts = Post::count();
        
        $data = [
            'totalusers' => $totalUsers,
            'totaltournaments' => $totalTournaments,
            'totalposts' => $totalPosts,
        ];
            return response()->json([
                'status' => 'Success',
                'message' => 'Data Retrieved successfully.',
                'data' => $data,
            ], 201);
    }
    public function getTournamentsByGame()
    {
       
        $games = Game::withCount('tournaments')->get();

        return response()->json([
            'status' => 'Success',
            'message' => 'Tournaments by Game retrieved successfully.',
            'data' => $games,
        ], 200);
    }

    public function getUsersByCountry()
    {
       
        $usersByCountry = User::select('country')
            ->selectRaw('COUNT(*) as user_count')
            ->groupBy('country')
            ->orderByDesc('user_count')
            ->get();

        return response()->json([
            'status' => 'Success',
            'message' => 'Users by Country retrieved successfully.',
            'data' => $usersByCountry,
        ], 200);
    }

    public function searchEntities(Request $request)
    {   
        $searchName=$request->input('searchName');
    
        $users = User::where('username', 'like', $searchName . '%')->where('user_role_id', '<>', 1)->get();

        
        $tournaments = Tournament::where('name', 'like', $searchName . '%')->get();

        
        $games = Game::where('name', 'like', $searchName . '%')->get();

        
        return [
            'users' => $users,
            'tournaments' => $tournaments,
            'games' => $games,
        ];
    }
    public function getContactUs(Request $request)
    {
        $search = $request->input('search');
    
        $query = ContactUs::query();
    
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', $search . '%')
                    ->orWhere('email', 'like', $search . '%');
            });
        }
    
        $messages = $query->get();
    
        return response()->json(['data' => $messages]);
    }

     
    public function fetchTournamentData()
    {   
        $tournamentTypes = TournamentType::all();
        $regions = Region::all();
        $games = Game::with('gameModes')->get();
    
        return response()->json([
            'tournamentTypes' => $tournamentTypes,
            'regions' => $regions,
            'games' => $games,
        ]);
    }
    
        public function createTournamentWinner(Request $request)
    {
        $request->validate([
            'tournament_id' => 'required|integer',
            'team_id' => 'required|integer',
        ]);

        $tournament = Tournament::findOrFail($request->input('tournament_id'));

        if ($tournament->is_completed == 1) {
            return response()->json(['message' => 'Tournament is already completed'], 400);
        }

    
        $existingWinner = TournamentWinner::where('tournament_id', $tournament->id)->first();

        if ($existingWinner) {
            return response()->json(['message' => 'Winner is already announced for this tournament'], 400);
        }

        $tournament->update(['is_completed' => 1]);

        $winningTeamId = $request->input('team_id');

        TournamentWinner::create([
            'tournament_id' => $tournament->id,
            'winner_id' => $winningTeamId,
        ]);

        $winningTeamMembers = TeamMember::where('team_id', $winningTeamId)->get();

        foreach ($winningTeamMembers as $teamMember) {
            $leaderboard = Leaderboard::firstOrNew(['user_id' => $teamMember->user_id]);
            $leaderboard->increment('won');
            $leaderboard->increment('points', $tournament->tournament_points);
            $leaderboard->save();
        }

        $losingTeams = Team::where('tournament_id', $tournament->id)
            ->where('id', '!=', $winningTeamId)
            ->get();

        foreach ($losingTeams as $losingTeam) {
            $losingTeamMembers = TeamMember::where('team_id', $losingTeam->id)->get();

            foreach ($losingTeamMembers as $losingTeamMember) {
                $leaderboard = Leaderboard::firstOrNew(['user_id' => $losingTeamMember->user_id]);
                $leaderboard->increment('lost');
                $leaderboard->save();
            }
        }

        return response()->json(['message' => 'Winners and losers updated successfully'], 200);
    }



    public function updateMatches(Request $request)
    {
        $request->validate([
            'tournament_id' => 'required|integer',
            'matches' => 'required|array',
            'matches.*.id' => 'required|integer',
            'matches.*.team1_id' => 'required|integer',
            'matches.*.team2_id' => 'required|integer',
            'matches.*.match_date' => 'nullable|date',
            'matches.*.is_completed' => 'required|boolean',
            'matches.*.nextmatchid' => 'nullable|integer',
            'matches.*.winner_id' => 'nullable|integer',
        
        ]);
    
        $tournamentId = $request->input('tournament_id');
        $matchesData = $request->input('matches');
    
   
            foreach ($matchesData as $matchData) {
                $matchId = $matchData['id'];
    
                
                Matching::where('id', $matchId)
                    ->whereHas('bracket', function ($query) use ($tournamentId) {
                        $query->where('tournament_id', $tournamentId);
                    })
                    ->update([
                        'team1_id' => $matchData['team1_id'],
                        'team2_id' => $matchData['team2_id'],
                        'match_date' => $matchData['match_date'],
                        'is_completed' => $matchData['is_completed'],
                        'nextmatchid' => $matchData['nextmatchid'],
                        'winner_id' => $matchData['winner_id'],
                    ]);
            }
    
            return response()->json(['message' => 'Matches updated successfully'], 200);
       
    }
    
    public function createMatches(Request $request)
    {
        $request->validate([
            'tournament_id' => 'required|integer',
            'matches' => 'required|array',
        ]);
    
        $tournamentId = $request->input('tournament_id');
        $matchesData = $request->input('matches');
    
           
            $bracket = Bracket::create([
                'tournament_id' => $tournamentId,
            ]);
    
          
            foreach ($matchesData as $matchData) {
                Matching::create([
                    'bracket_id' => $bracket->id,
                    'team1_id' => $matchData['team1_id'],
                    'team2_id' => $matchData['team2_id'],
                    'match_date' => $matchData['match_date'],
                    'is_completed' => $matchData['is_completed'],
                    'nextmatchid' => $matchData['nextmatchid'],
                    'winner_id' => $matchData['winner_id'],
                    
                ]);
            }
    
            return response()->json(['message' => 'Matches created successfully'], 200);
       
    }
    public function manageMatches(Request $request)
    {
        $request->validate([
            'tournament_id' => 'required|integer',
            'generatedmatches' => 'required|array',
        ]);
    
        $tournamentId = $request->input('tournament_id');
        $roundsData = $request->input('generatedmatches');
    
        Matching::whereHas('bracket', function ($query) use ($tournamentId) {
            $query->where('tournament_id', $tournamentId);
        })->delete();
        Bracket::where('tournament_id', $tournamentId)->delete();
      
    
        $allMatches = [];
    
        foreach ($roundsData as $round) {
            $bracket = Bracket::create([
                'tournament_id' => $tournamentId,
            ]);
    
            foreach ($round['matches'] as $matchData) {
                $newMatch = Matching::create([
                    'bracket_id' => $bracket->id,
                    'team1_id' => $matchData['team1_id'],
                    'team2_id' => $matchData['team2_id'],
                    'match_date' => $matchData['match_date'],
                    'is_completed' => $matchData['is_completed'],
                    'nextmatchid' => $matchData['nextmatchid'],
                    'winner_id' => $matchData['winner_id'],
                    'round_number'=> $matchData['round_number'],
                ]);
    
                $allMatches[] = $newMatch;
            }
        }
    
    
        $allTournamentMatches = Matching::whereHas('bracket', function ($query) use ($tournamentId) {
            $query->where('tournament_id', $tournamentId);
        })->get();
    
        return response()->json(['message' => 'Matches managed successfully', 'all_matches' => $allMatches], 200);
    }
    
    



    
}
