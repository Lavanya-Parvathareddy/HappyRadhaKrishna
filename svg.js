document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var body = document.body;
  
    // Create popup
    var popup = document.createElement('div');
    popup.id = 'musicPopup';
    popup.innerHTML = `
      <p>Would you like to play Krishna Ashtami music?</p>
      <div class="button-container">
        <button id="playButton">Play</button>
        <button id="noThanksButton">No, thanks</button>
      </div>
    `;
  
    // Create style element
    var style = document.createElement('style');
    style.textContent = `
      #musicPopup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #153047;
        color: #4cf5e9;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 0 20px rgba(76, 245, 233, 0.5);
        z-index: 1000;
        text-align: center;
        font-family: "Noto Sans Telugu", sans-serif;
        max-width: 90%;
        width: 300px;
      }
  
      #musicPopup p {
        font-size: 18px;
        margin-bottom: 20px;
      }
  
      .button-container {
        display: flex;
        justify-content: space-around;
      }
  
      #musicPopup button {
        background-color: #4cf5e9;
        color: #153047;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        flex-grow: 1;
        margin: 0 5px;
      }
  
      #musicPopup #noThanksButton {
        background-color: #1c6872;
        color: #4cf5e9;
      }
  
      #musicPopup button:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(76, 245, 233, 0.3);
      }
  
      #musicPopup button:active {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(76, 245, 233, 0.3);
      }
  
      @media (max-width: 425px) {
        #musicPopup {
          padding: 20px;
          width: 85%;
        }
  
        #musicPopup p {
          font-size: 16px;
          margin-bottom: 15px;
        }
  
        .button-container {
          flex-direction: column;
        }
  
        #musicPopup button {
          margin: 5px 0;
          padding: 12px 0;
          font-size: 14px;
        }
      }
    `;
  
    // Append style and popup to body
    document.head.appendChild(style);
    document.body.appendChild(popup);
  
    function resumeAnimations() {
      body.classList.remove('paused');
      document.body.removeChild(popup);
    }
  
    // Handle play button click
    document.getElementById('playButton').addEventListener('click', function() {
      audio.play();
      resumeAnimations();
    });
  
    // Handle "No, thanks" button click
    document.getElementById('noThanksButton').addEventListener('click', function() {
      resumeAnimations();
    });
  });