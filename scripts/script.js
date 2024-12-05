const hamburger = document.querySelector('button');
        const menu = document.querySelector('nav ul');

        // Toggle het menu openen/sluiten
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        // Sluit het menu als ergens buiten het menu wordt geklikt
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && event.target !== hamburger) {
                menu.classList.remove('show');
            }
        });