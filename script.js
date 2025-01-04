// Particles.js configuration
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80, // Nombre de particules
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff" // Couleur des particules
      },
      "shape": {
        "type": "circle", // Forme des particules
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
      },
      "opacity": {
        "value": 0.6, // Opacité des particules
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3, // Taille des particules
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "move": {
        "enable": true,
        "speed": 1, // Vitesse de mouvement
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "connect" // Connecte les particules lorsqu'on survole avec la souris
        },
        "onclick": {
          "enable": false
        }
      },
      "modes": {
        "connect": {
          "distance": 100, // Distance de connexion des particules
          "links": {
            "opacity": 0.5
          }
        }
      }
    },
    "retina_detect": true
  });
  