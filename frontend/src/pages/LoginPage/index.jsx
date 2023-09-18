import React from "react";
import "./styles.css";
const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="login-container">
        <div className="login-title-wrapper">
          <div className="login-title">LOGIN</div>
          <div className="login-title">SIGN UP</div>
        </div>

        <div className="login-form" id="loginform">
          <span className="login-span">Email or Username</span>
          <input
            className="login-input"
            type="text"
            id="loginidentifier"
            name="loginidentifier"
            placeholder="Email or Username"
          />
          <span className="login-span">Password</span>
          <input
            className="login-input"
            type="password"
            id="loginpassword"
            name="loginpassword"
            placeholder="Password"
          />
          <div className="button-wrapper">
            <button className="login-button" id="submitlogin">
              Login
            </button>
            <div className="forgotpassword">Forgot Password ?</div>
          </div>

          <div className="google-button-wrapper">
            <div className="rule">
              <hr className="line" />
              <span className="or-text">OR</span>
              <hr className="line" />
            </div>
            <div className="google-button-container">
              <button className="google-button">
                <svg
                  width="400"
                  height="40"
                  viewBox="0 0 400 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" y="0.5" width="399" height="39" rx="19.5" />
                  <path
                    d="M157.773 22.4365C157.773 22.2314 157.742 22.0492 157.678 21.8896C157.618 21.7301 157.511 21.5843 157.356 21.4521C157.201 21.32 156.983 21.1924 156.7 21.0693C156.422 20.9417 156.067 20.8118 155.634 20.6797C155.16 20.5339 154.722 20.3721 154.321 20.1943C153.925 20.012 153.578 19.8024 153.282 19.5654C152.986 19.3239 152.756 19.0482 152.592 18.7383C152.428 18.4238 152.346 18.0615 152.346 17.6514C152.346 17.2458 152.43 16.8766 152.599 16.5439C152.772 16.2113 153.016 15.9242 153.33 15.6826C153.649 15.4365 154.025 15.2474 154.458 15.1152C154.891 14.9785 155.369 14.9102 155.894 14.9102C156.632 14.9102 157.268 15.0469 157.801 15.3203C158.339 15.5938 158.751 15.9606 159.038 16.4209C159.33 16.8812 159.476 17.3893 159.476 17.9453H157.773C157.773 17.6172 157.703 17.3278 157.562 17.0771C157.425 16.8219 157.215 16.6214 156.933 16.4756C156.655 16.3298 156.301 16.2568 155.873 16.2568C155.467 16.2568 155.13 16.3184 154.861 16.4414C154.592 16.5645 154.392 16.7308 154.26 16.9404C154.128 17.1501 154.062 17.387 154.062 17.6514C154.062 17.8382 154.105 18.0091 154.191 18.1641C154.278 18.3145 154.41 18.4557 154.588 18.5879C154.766 18.7155 154.989 18.8363 155.258 18.9502C155.527 19.0641 155.843 19.1735 156.208 19.2783C156.759 19.4424 157.24 19.6247 157.65 19.8252C158.061 20.0212 158.402 20.2445 158.676 20.4951C158.949 20.7458 159.154 21.0306 159.291 21.3496C159.428 21.6641 159.496 22.0218 159.496 22.4229C159.496 22.8421 159.412 23.2204 159.243 23.5576C159.075 23.8903 158.833 24.1751 158.519 24.4121C158.209 24.6445 157.835 24.8245 157.397 24.9521C156.965 25.0752 156.481 25.1367 155.948 25.1367C155.47 25.1367 154.998 25.0729 154.533 24.9453C154.073 24.8177 153.654 24.624 153.275 24.3643C152.897 24.0999 152.596 23.7718 152.373 23.3799C152.15 22.9834 152.038 22.5208 152.038 21.9922H153.754C153.754 22.3158 153.809 22.5915 153.918 22.8193C154.032 23.0472 154.189 23.234 154.39 23.3799C154.59 23.5212 154.823 23.626 155.087 23.6943C155.356 23.7627 155.643 23.7969 155.948 23.7969C156.349 23.7969 156.684 23.7399 156.953 23.626C157.227 23.512 157.432 23.3525 157.568 23.1475C157.705 22.9424 157.773 22.7054 157.773 22.4365ZM162.863 17.6035V25H161.209V17.6035H162.863ZM161.1 15.6621C161.1 15.4115 161.182 15.2041 161.346 15.04C161.514 14.8714 161.747 14.7871 162.043 14.7871C162.335 14.7871 162.565 14.8714 162.733 15.04C162.902 15.2041 162.986 15.4115 162.986 15.6621C162.986 15.9082 162.902 16.1133 162.733 16.2773C162.565 16.4414 162.335 16.5234 162.043 16.5234C161.747 16.5234 161.514 16.4414 161.346 16.2773C161.182 16.1133 161.1 15.9082 161.1 15.6621ZM169.655 17.6035H171.152V24.7949C171.152 25.4603 171.011 26.0254 170.729 26.4902C170.446 26.9551 170.052 27.3083 169.546 27.5498C169.04 27.7959 168.454 27.9189 167.789 27.9189C167.507 27.9189 167.192 27.8779 166.846 27.7959C166.504 27.7139 166.171 27.5817 165.848 27.3994C165.529 27.2217 165.262 26.987 165.048 26.6953L165.82 25.7246C166.085 26.0391 166.376 26.2692 166.695 26.415C167.014 26.5609 167.349 26.6338 167.7 26.6338C168.078 26.6338 168.4 26.5632 168.664 26.4219C168.933 26.2852 169.14 26.0824 169.286 25.8135C169.432 25.5446 169.505 25.2165 169.505 24.8291V19.2783L169.655 17.6035ZM164.631 21.3838V21.2402C164.631 20.6797 164.699 20.1693 164.836 19.709C164.973 19.2441 165.169 18.8454 165.424 18.5127C165.679 18.1755 165.989 17.918 166.354 17.7402C166.718 17.5579 167.131 17.4668 167.591 17.4668C168.069 17.4668 168.477 17.5534 168.814 17.7266C169.156 17.8997 169.441 18.1481 169.669 18.4717C169.897 18.7907 170.075 19.1735 170.202 19.6201C170.334 20.0622 170.432 20.5544 170.496 21.0967V21.5547C170.437 22.0833 170.337 22.5664 170.195 23.0039C170.054 23.4414 169.867 23.8197 169.635 24.1387C169.402 24.4577 169.115 24.7038 168.773 24.877C168.436 25.0501 168.037 25.1367 167.577 25.1367C167.126 25.1367 166.718 25.0433 166.354 24.8564C165.993 24.6696 165.684 24.4076 165.424 24.0703C165.169 23.7331 164.973 23.3366 164.836 22.8809C164.699 22.4206 164.631 21.9215 164.631 21.3838ZM166.278 21.2402V21.3838C166.278 21.721 166.31 22.0355 166.374 22.3271C166.442 22.6188 166.545 22.8763 166.682 23.0996C166.823 23.3184 167.001 23.4915 167.215 23.6191C167.434 23.7422 167.691 23.8037 167.987 23.8037C168.375 23.8037 168.691 23.7217 168.938 23.5576C169.188 23.3936 169.38 23.1725 169.512 22.8945C169.648 22.612 169.744 22.2975 169.799 21.9512V20.7139C169.771 20.445 169.715 20.1943 169.628 19.9619C169.546 19.7295 169.434 19.5267 169.293 19.3535C169.152 19.1758 168.974 19.0391 168.76 18.9434C168.546 18.8431 168.293 18.793 168.001 18.793C167.705 18.793 167.447 18.8568 167.229 18.9844C167.01 19.112 166.83 19.2874 166.688 19.5107C166.552 19.734 166.449 19.9938 166.381 20.29C166.312 20.5863 166.278 20.903 166.278 21.2402ZM174.745 19.1826V25H173.098V17.6035H174.649L174.745 19.1826ZM174.451 21.0283L173.918 21.0215C173.923 20.4974 173.995 20.0166 174.137 19.5791C174.283 19.1416 174.483 18.7656 174.738 18.4512C174.998 18.1367 175.308 17.8952 175.668 17.7266C176.028 17.5534 176.429 17.4668 176.871 17.4668C177.227 17.4668 177.548 17.5169 177.835 17.6172C178.127 17.7129 178.375 17.8701 178.58 18.0889C178.79 18.3076 178.949 18.5924 179.059 18.9434C179.168 19.2897 179.223 19.7158 179.223 20.2217V25H177.568V20.2148C177.568 19.8594 177.516 19.5791 177.411 19.374C177.311 19.1644 177.163 19.0163 176.967 18.9297C176.775 18.8385 176.536 18.793 176.249 18.793C175.966 18.793 175.714 18.8522 175.49 18.9707C175.267 19.0892 175.078 19.251 174.923 19.4561C174.772 19.6611 174.656 19.8981 174.574 20.167C174.492 20.4359 174.451 20.723 174.451 21.0283ZM186.654 17.6035V25H185V17.6035H186.654ZM184.891 15.6621C184.891 15.4115 184.973 15.2041 185.137 15.04C185.305 14.8714 185.538 14.7871 185.834 14.7871C186.126 14.7871 186.356 14.8714 186.524 15.04C186.693 15.2041 186.777 15.4115 186.777 15.6621C186.777 15.9082 186.693 16.1133 186.524 16.2773C186.356 16.4414 186.126 16.5234 185.834 16.5234C185.538 16.5234 185.305 16.4414 185.137 16.2773C184.973 16.1133 184.891 15.9082 184.891 15.6621ZM190.343 19.1826V25H188.695V17.6035H190.247L190.343 19.1826ZM190.049 21.0283L189.516 21.0215C189.52 20.4974 189.593 20.0166 189.734 19.5791C189.88 19.1416 190.081 18.7656 190.336 18.4512C190.596 18.1367 190.906 17.8952 191.266 17.7266C191.626 17.5534 192.027 17.4668 192.469 17.4668C192.824 17.4668 193.146 17.5169 193.433 17.6172C193.724 17.7129 193.973 17.8701 194.178 18.0889C194.387 18.3076 194.547 18.5924 194.656 18.9434C194.766 19.2897 194.82 19.7158 194.82 20.2217V25H193.166V20.2148C193.166 19.8594 193.114 19.5791 193.009 19.374C192.909 19.1644 192.76 19.0163 192.564 18.9297C192.373 18.8385 192.134 18.793 191.847 18.793C191.564 18.793 191.311 18.8522 191.088 18.9707C190.865 19.0892 190.675 19.251 190.521 19.4561C190.37 19.6611 190.254 19.8981 190.172 20.167C190.09 20.4359 190.049 20.723 190.049 21.0283ZM202.498 23.3594L204.207 17.6035H205.26L204.973 19.3262L203.25 25H202.307L202.498 23.3594ZM201.493 17.6035L202.826 23.3867L202.936 25H201.883L199.88 17.6035H201.493ZM206.859 23.3184L208.151 17.6035H209.758L207.762 25H206.709L206.859 23.3184ZM205.438 17.6035L207.126 23.291L207.338 25H206.395L204.651 19.3193L204.364 17.6035H205.438ZM212.893 17.6035V25H211.238V17.6035H212.893ZM211.129 15.6621C211.129 15.4115 211.211 15.2041 211.375 15.04C211.544 14.8714 211.776 14.7871 212.072 14.7871C212.364 14.7871 212.594 14.8714 212.763 15.04C212.931 15.2041 213.016 15.4115 213.016 15.6621C213.016 15.9082 212.931 16.1133 212.763 16.2773C212.594 16.4414 212.364 16.5234 212.072 16.5234C211.776 16.5234 211.544 16.4414 211.375 16.2773C211.211 16.1133 211.129 15.9082 211.129 15.6621ZM218.338 17.6035V18.8066H214.168V17.6035H218.338ZM215.371 15.792H217.019V22.9561C217.019 23.1839 217.05 23.3594 217.114 23.4824C217.183 23.6009 217.276 23.6807 217.395 23.7217C217.513 23.7627 217.652 23.7832 217.812 23.7832C217.925 23.7832 218.035 23.7764 218.14 23.7627C218.244 23.749 218.329 23.7354 218.393 23.7217L218.399 24.9795C218.263 25.0205 218.103 25.057 217.921 25.0889C217.743 25.1208 217.538 25.1367 217.306 25.1367C216.927 25.1367 216.592 25.0706 216.301 24.9385C216.009 24.8018 215.781 24.5807 215.617 24.2754C215.453 23.9701 215.371 23.5645 215.371 23.0586V15.792ZM221.486 14.5V25H219.846V14.5H221.486ZM221.199 21.0283L220.666 21.0215C220.671 20.5111 220.741 20.0394 220.878 19.6064C221.019 19.1735 221.215 18.7975 221.466 18.4785C221.721 18.1549 222.026 17.9066 222.382 17.7334C222.737 17.5557 223.132 17.4668 223.564 17.4668C223.929 17.4668 224.257 17.5169 224.549 17.6172C224.845 17.7174 225.1 17.8792 225.314 18.1025C225.529 18.3213 225.69 18.6084 225.8 18.9639C225.914 19.3148 225.971 19.7432 225.971 20.249V25H224.316V20.2354C224.316 19.8799 224.264 19.5973 224.159 19.3877C224.059 19.1781 223.911 19.0277 223.715 18.9365C223.519 18.8408 223.28 18.793 222.997 18.793C222.701 18.793 222.439 18.8522 222.211 18.9707C221.988 19.0892 221.801 19.251 221.65 19.4561C221.5 19.6611 221.386 19.8981 221.309 20.167C221.236 20.4359 221.199 20.723 221.199 21.0283ZM239.432 19.9141V23.7148C239.29 23.9017 239.069 24.1068 238.769 24.3301C238.472 24.5488 238.078 24.738 237.586 24.8975C237.094 25.057 236.481 25.1367 235.747 25.1367C235.123 25.1367 234.551 25.0319 234.031 24.8223C233.512 24.6081 233.063 24.2959 232.685 23.8857C232.311 23.4756 232.021 22.9766 231.816 22.3887C231.611 21.7962 231.509 21.1217 231.509 20.3652V19.6748C231.509 18.9229 231.602 18.2529 231.789 17.665C231.98 17.0726 232.254 16.5713 232.609 16.1611C232.965 15.751 233.393 15.4411 233.895 15.2314C234.4 15.0173 234.972 14.9102 235.61 14.9102C236.426 14.9102 237.101 15.0469 237.634 15.3203C238.172 15.5892 238.586 15.9629 238.878 16.4414C239.17 16.9199 239.354 17.4668 239.432 18.082H237.75C237.695 17.7357 237.588 17.4258 237.429 17.1523C237.274 16.8789 237.05 16.6647 236.759 16.5098C236.472 16.3503 236.098 16.2705 235.638 16.2705C235.241 16.2705 234.893 16.3457 234.592 16.4961C234.291 16.6465 234.04 16.8675 233.84 17.1592C233.644 17.4508 233.496 17.8063 233.396 18.2256C233.295 18.6449 233.245 19.1234 233.245 19.6611V20.3652C233.245 20.9121 233.302 21.3975 233.416 21.8213C233.535 22.2451 233.703 22.6029 233.922 22.8945C234.145 23.1862 234.416 23.4072 234.735 23.5576C235.054 23.7035 235.414 23.7764 235.815 23.7764C236.207 23.7764 236.529 23.7445 236.779 23.6807C237.03 23.6123 237.228 23.5326 237.374 23.4414C237.524 23.3457 237.641 23.2546 237.723 23.168V21.1924H235.651V19.9141H239.432ZM241.104 21.3838V21.2266C241.104 20.6934 241.181 20.1989 241.336 19.7432C241.491 19.2829 241.714 18.8841 242.006 18.5469C242.302 18.2051 242.662 17.9408 243.086 17.7539C243.514 17.5625 243.997 17.4668 244.535 17.4668C245.077 17.4668 245.561 17.5625 245.984 17.7539C246.413 17.9408 246.775 18.2051 247.071 18.5469C247.368 18.8841 247.593 19.2829 247.748 19.7432C247.903 20.1989 247.98 20.6934 247.98 21.2266V21.3838C247.98 21.917 247.903 22.4115 247.748 22.8672C247.593 23.3229 247.368 23.7217 247.071 24.0635C246.775 24.4007 246.415 24.665 245.991 24.8564C245.567 25.0433 245.087 25.1367 244.549 25.1367C244.007 25.1367 243.521 25.0433 243.093 24.8564C242.669 24.665 242.309 24.4007 242.013 24.0635C241.716 23.7217 241.491 23.3229 241.336 22.8672C241.181 22.4115 241.104 21.917 241.104 21.3838ZM242.751 21.2266V21.3838C242.751 21.7165 242.785 22.0309 242.854 22.3271C242.922 22.6234 243.029 22.8831 243.175 23.1064C243.321 23.3298 243.507 23.5052 243.735 23.6328C243.963 23.7604 244.234 23.8242 244.549 23.8242C244.854 23.8242 245.118 23.7604 245.342 23.6328C245.57 23.5052 245.757 23.3298 245.902 23.1064C246.048 22.8831 246.155 22.6234 246.224 22.3271C246.297 22.0309 246.333 21.7165 246.333 21.3838V21.2266C246.333 20.8984 246.297 20.5885 246.224 20.2969C246.155 20.0007 246.046 19.7386 245.896 19.5107C245.75 19.2829 245.563 19.1051 245.335 18.9775C245.112 18.8454 244.845 18.7793 244.535 18.7793C244.225 18.7793 243.956 18.8454 243.729 18.9775C243.505 19.1051 243.321 19.2829 243.175 19.5107C243.029 19.7386 242.922 20.0007 242.854 20.2969C242.785 20.5885 242.751 20.8984 242.751 21.2266ZM249.297 21.3838V21.2266C249.297 20.6934 249.374 20.1989 249.529 19.7432C249.684 19.2829 249.908 18.8841 250.199 18.5469C250.495 18.2051 250.855 17.9408 251.279 17.7539C251.708 17.5625 252.191 17.4668 252.729 17.4668C253.271 17.4668 253.754 17.5625 254.178 17.7539C254.606 17.9408 254.968 18.2051 255.265 18.5469C255.561 18.8841 255.786 19.2829 255.941 19.7432C256.096 20.1989 256.174 20.6934 256.174 21.2266V21.3838C256.174 21.917 256.096 22.4115 255.941 22.8672C255.786 23.3229 255.561 23.7217 255.265 24.0635C254.968 24.4007 254.608 24.665 254.185 24.8564C253.761 25.0433 253.28 25.1367 252.742 25.1367C252.2 25.1367 251.715 25.0433 251.286 24.8564C250.862 24.665 250.502 24.4007 250.206 24.0635C249.91 23.7217 249.684 23.3229 249.529 22.8672C249.374 22.4115 249.297 21.917 249.297 21.3838ZM250.944 21.2266V21.3838C250.944 21.7165 250.979 22.0309 251.047 22.3271C251.115 22.6234 251.222 22.8831 251.368 23.1064C251.514 23.3298 251.701 23.5052 251.929 23.6328C252.157 23.7604 252.428 23.8242 252.742 23.8242C253.048 23.8242 253.312 23.7604 253.535 23.6328C253.763 23.5052 253.95 23.3298 254.096 23.1064C254.242 22.8831 254.349 22.6234 254.417 22.3271C254.49 22.0309 254.526 21.7165 254.526 21.3838V21.2266C254.526 20.8984 254.49 20.5885 254.417 20.2969C254.349 20.0007 254.239 19.7386 254.089 19.5107C253.943 19.2829 253.756 19.1051 253.528 18.9775C253.305 18.8454 253.038 18.7793 252.729 18.7793C252.419 18.7793 252.15 18.8454 251.922 18.9775C251.699 19.1051 251.514 19.2829 251.368 19.5107C251.222 19.7386 251.115 20.0007 251.047 20.2969C250.979 20.5885 250.944 20.8984 250.944 21.2266ZM262.542 17.6035H264.039V24.7949C264.039 25.4603 263.898 26.0254 263.615 26.4902C263.333 26.9551 262.938 27.3083 262.433 27.5498C261.927 27.7959 261.341 27.9189 260.676 27.9189C260.393 27.9189 260.079 27.8779 259.732 27.7959C259.391 27.7139 259.058 27.5817 258.734 27.3994C258.415 27.2217 258.149 26.987 257.935 26.6953L258.707 25.7246C258.971 26.0391 259.263 26.2692 259.582 26.415C259.901 26.5609 260.236 26.6338 260.587 26.6338C260.965 26.6338 261.286 26.5632 261.551 26.4219C261.82 26.2852 262.027 26.0824 262.173 25.8135C262.319 25.5446 262.392 25.2165 262.392 24.8291V19.2783L262.542 17.6035ZM257.518 21.3838V21.2402C257.518 20.6797 257.586 20.1693 257.723 19.709C257.859 19.2441 258.055 18.8454 258.311 18.5127C258.566 18.1755 258.876 17.918 259.24 17.7402C259.605 17.5579 260.017 17.4668 260.478 17.4668C260.956 17.4668 261.364 17.5534 261.701 17.7266C262.043 17.8997 262.328 18.1481 262.556 18.4717C262.784 18.7907 262.961 19.1735 263.089 19.6201C263.221 20.0622 263.319 20.5544 263.383 21.0967V21.5547C263.324 22.0833 263.223 22.5664 263.082 23.0039C262.941 23.4414 262.754 23.8197 262.521 24.1387C262.289 24.4577 262.002 24.7038 261.66 24.877C261.323 25.0501 260.924 25.1367 260.464 25.1367C260.013 25.1367 259.605 25.0433 259.24 24.8564C258.88 24.6696 258.57 24.4076 258.311 24.0703C258.055 23.7331 257.859 23.3366 257.723 22.8809C257.586 22.4206 257.518 21.9215 257.518 21.3838ZM259.165 21.2402V21.3838C259.165 21.721 259.197 22.0355 259.261 22.3271C259.329 22.6188 259.432 22.8763 259.568 23.0996C259.71 23.3184 259.887 23.4915 260.102 23.6191C260.32 23.7422 260.578 23.8037 260.874 23.8037C261.261 23.8037 261.578 23.7217 261.824 23.5576C262.075 23.3936 262.266 23.1725 262.398 22.8945C262.535 22.612 262.631 22.2975 262.686 21.9512V20.7139C262.658 20.445 262.601 20.1943 262.515 19.9619C262.433 19.7295 262.321 19.5267 262.18 19.3535C262.038 19.1758 261.861 19.0391 261.646 18.9434C261.432 18.8431 261.179 18.793 260.888 18.793C260.591 18.793 260.334 18.8568 260.115 18.9844C259.896 19.112 259.716 19.2874 259.575 19.5107C259.438 19.734 259.336 19.9938 259.268 20.29C259.199 20.5863 259.165 20.903 259.165 21.2402ZM267.762 14.5V25H266.107V14.5H267.762ZM273.077 25.1367C272.53 25.1367 272.036 25.0479 271.594 24.8701C271.156 24.6878 270.783 24.4349 270.473 24.1113C270.167 23.7878 269.933 23.4072 269.769 22.9697C269.604 22.5322 269.522 22.0605 269.522 21.5547V21.2812C269.522 20.7025 269.607 20.1784 269.775 19.709C269.944 19.2396 270.179 18.8385 270.479 18.5059C270.78 18.1686 271.136 17.9111 271.546 17.7334C271.956 17.5557 272.4 17.4668 272.879 17.4668C273.408 17.4668 273.87 17.5557 274.267 17.7334C274.663 17.9111 274.991 18.1618 275.251 18.4854C275.515 18.8044 275.711 19.1849 275.839 19.627C275.971 20.069 276.037 20.5566 276.037 21.0898V21.7939H270.322V20.6113H274.41V20.4814C274.401 20.1852 274.342 19.9072 274.232 19.6475C274.128 19.3877 273.966 19.1781 273.747 19.0186C273.528 18.859 273.237 18.7793 272.872 18.7793C272.599 18.7793 272.355 18.8385 272.141 18.957C271.931 19.071 271.756 19.2373 271.614 19.4561C271.473 19.6748 271.364 19.9391 271.286 20.249C271.213 20.5544 271.177 20.8984 271.177 21.2812V21.5547C271.177 21.8783 271.22 22.179 271.307 22.457C271.398 22.7305 271.53 22.9697 271.703 23.1748C271.876 23.3799 272.086 23.5417 272.332 23.6602C272.578 23.7741 272.858 23.8311 273.173 23.8311C273.569 23.8311 273.923 23.7513 274.232 23.5918C274.542 23.4323 274.811 23.2067 275.039 22.915L275.907 23.7559C275.748 23.9883 275.54 24.2116 275.285 24.4258C275.03 24.6354 274.718 24.8063 274.349 24.9385C273.984 25.0706 273.56 25.1367 273.077 25.1367Z"
                    fill="#3C4043"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32.6 20.2271C32.6 19.518 32.5364 18.8362 32.4182 18.1816H23V22.0498H28.3818C28.15 23.2998 27.4455 24.3589 26.3864 25.068V27.5771H29.6182C31.5091 25.8362 32.6 23.2725 32.6 20.2271Z"
                    fill="#4285F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.0001 29.9999C25.7001 29.9999 27.9637 29.1044 29.6183 27.5772L26.3864 25.0681C25.491 25.6681 24.3455 26.0226 23.0001 26.0226C20.3955 26.0226 18.191 24.2635 17.4046 21.8999H14.0637V24.4908C15.7092 27.759 19.091 29.9999 23.0001 29.9999Z"
                    fill="#34A853"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4045 21.8997C17.2045 21.2997 17.0909 20.6588 17.0909 19.9997C17.0909 19.3406 17.2045 18.6997 17.4045 18.0997V15.5088H14.0636C13.3864 16.8588 13 18.3861 13 19.9997C13 21.6133 13.3864 23.1406 14.0636 24.4906L17.4045 21.8997Z"
                    fill="#FBBC05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.0001 13.9773C24.4683 13.9773 25.7864 14.4818 26.8228 15.4727L29.691 12.6045C27.9592 10.9909 25.6955 10 23.0001 10C19.091 10 15.7092 12.2409 14.0637 15.5091L17.4046 18.1C18.191 15.7364 20.3955 13.9773 23.0001 13.9773Z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
