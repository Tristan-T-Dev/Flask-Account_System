class ProfileForm {
    constructor() {
        this.profileInput = document.getElementById('profile');
        this.profileBtn = document.getElementById('profile-btn');
        this.profilePic = document.getElementById('profile_pic');
        this.licenseInput = document.getElementById('license');
        this.licenseButton = document.getElementById('license_btn');
        this.formBody = document.querySelector('.formbody');

        this.init();
    }

    init() {
        this.bindEvents();
        this.addFadeInEffect();
        this.setupMessageRemoval();
    }

    bindEvents() {
        this.profileInput.addEventListener('change', () => this.handleProfileChange());
        this.licenseInput.addEventListener('change', () => this.handleLicenseChange());
    }

    handleProfileChange() {
        if (this.profileInput.files && this.profileInput.files[0]) {
            this.profilePic.src = URL.createObjectURL(this.profileInput.files[0]);
            this.profilePic.onload = () => {
                URL.revokeObjectURL(this.profilePic.src);
            };
            this.profileBtn.classList.add('uploaded');
        } else {
            this.profileBtn.classList.remove('uploaded');
        }
    }

    handleLicenseChange() {
        if (this.licenseInput.files && this.licenseInput.files[0]) {
            this.licenseButton.classList.add('uploaded');
        } else {
            this.licenseButton.classList.remove('uploaded');
        }
    }

    addFadeInEffect() {
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.querySelector('.contact-box');
            form.classList.add('fade-in');
            this.formBody.classList.add('fade-in');
        });
    }

    setupMessageRemoval() {
        setTimeout(() => {
            const messages = document.querySelectorAll('.message-box');
            messages.forEach(msg => msg.remove());
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProfileForm();
});
