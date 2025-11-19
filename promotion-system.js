// Politrade Special Promotion System
// 6 Months Free for First 100 Users

class PromotionSystem {
    constructor() {
        this.totalSlots = 100;
        this.claimedSlots = 23; // Simulated initial claims
        this.availableSlots = this.totalSlots - this.claimedSlots;
        this.promotionEndDate = new Date('2025-12-31');
        this.promotionStartDate = new Date('2025-11-01');
        
        this.initializePromotion();
    }

    initializePromotion() {
        // Load claimed slots from localStorage
        const saved = localStorage.getItem('politrade_promotion');
        if (saved) {
            const data = JSON.parse(saved);
            this.claimedSlots = data.claimedSlots || 0;
            this.availableSlots = this.totalSlots - this.claimedSlots;
        }
        
        this.updatePromotionDisplay();
        this.startCountdownTimer();
    }

    claimFreeTrial() {
        if (this.availableSlots <= 0) {
            this.showPromotionFull();
            return false;
        }

        // Check if user already claimed
        const userEmail = localStorage.getItem('politrade_user_email');
        if (this.hasUserClaimed(userEmail)) {
            this.showAlreadyClaimed();
            return false;
        }

        // Claim the slot
        this.claimedSlots++;
        this.availableSlots = this.totalSlots - this.claimedSlots;
        
        // Save to localStorage
        const promotionData = {
            claimedSlots: this.claimedSlots,
            availableSlots: this.availableSlots,
            claimedBy: userEmail,
            claimedAt: new Date().toISOString(),
            trialEndsAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString() // 6 months
        };
        
        localStorage.setItem('politrade_promotion', JSON.stringify(promotionData));
        localStorage.setItem(`promotion_${userEmail}`, JSON.stringify(promotionData));
        
        this.updatePromotionDisplay();
        this.showSuccessAnimation();
        return true;
    }

    hasUserClaimed(email) {
        if (!email) return false;
        return localStorage.getItem(`promotion_${email}`) !== null;
    }

    updatePromotionDisplay() {
        const progressPercent = (this.claimedSlots / this.totalSlots) * 100;
        
        // Update progress bar
        const progressBar = document.getElementById('promotion-progress');
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }
        
        // Update slots text
        const slotsText = document.getElementById('available-slots');
        if (slotsText) {
            slotsText.textContent = `${this.availableSlots} of ${this.totalSlots} FREE spots remaining`;
        }
        
        // Update urgency message
        const urgencyMsg = document.getElementById('urgency-message');
        if (urgencyMsg) {
            if (this.availableSlots <= 10) {
                urgencyMsg.textContent = '⚠️ Almost gone! Only a few spots left!';
                urgencyMsg.className = 'urgency-high';
            } else if (this.availableSlots <= 25) {
                urgencyMsg.textContent = '🔥 Filling up fast! Limited spots remaining!';
                urgencyMsg.className = 'urgency-medium';
            } else {
                urgencyMsg.textContent = '✅ Limited time offer - 6 months FREE!';
                urgencyMsg.className = 'urgity-normal';
            }
        }
    }

    startCountdownTimer() {
        const timerElements = {
            days: document.getElementById('countdown-days'),
            hours: document.getElementById('countdown-hours'),
            minutes: document.getElementById('countdown-minutes'),
            seconds: document.getElementById('countdown-seconds')
        };

        const updateTimer = () => {
            const now = new Date();
            const timeLeft = this.promotionEndDate - now;
            
            if (timeLeft <= 0) {
                Object.values(timerElements).forEach(el => {
                    if (el) el.textContent = '00';
                });
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            if (timerElements.days) timerElements.days.textContent = String(days).padStart(2, '0');
            if (timerElements.hours) timerElements.hours.textContent = String(hours).padStart(2, '0');
            if (timerElements.minutes) timerElements.minutes.textContent = String(minutes).padStart(2, '0');
            if (timerElements.seconds) timerElements.seconds.textContent = String(seconds).padStart(2, '0');
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    showSuccessAnimation() {
        const modal = document.createElement('div');
        modal.className = 'promotion-success-modal';
        modal.innerHTML = `
            <div class="success-content">
                <div class="success-icon">🎉</div>
                <h2>Congratulations!</h2>
                <p>You've secured your 6-month FREE trial!</p>
                <div class="success-details">
                    <p><strong>Your trial expires:</strong> ${new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                    <p><strong>Savings:</strong> $120.00 (6 months × $20/month)</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" class="success-button">Start Trading Now</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (modal.parentElement) {
                modal.remove();
            }
        }, 5000);
    }

    showPromotionFull() {
        alert('Sorry! All 100 free spots have been claimed. \n\nBut you can still get 20% OFF your first 3 months with code: EARLYBIRD20');
    }

    showAlreadyClaimed() {
        const claimed = localStorage.getItem(`promotion_${localStorage.getItem('politrade_user_email')}`);
        const data = JSON.parse(claimed);
        alert(`You've already claimed your free trial!\n\nTrial expires: ${new Date(data.trialEndsAt).toLocaleDateString()}`);
    }

    getPromotionStats() {
        return {
            totalSlots: this.totalSlots,
            claimedSlots: this.claimedSlots,
            availableSlots: this.availableSlots,
            progressPercent: (this.claimedSlots / this.totalSlots) * 100,
            timeRemaining: this.promotionEndDate - new Date(),
            isActive: this.availableSlots > 0 && new Date() < this.promotionEndDate
        };
    }
}

// Initialize promotion system
let promotionSystem;
document.addEventListener('DOMContentLoaded', () => {
    promotionSystem = new PromotionSystem();
});

// Global function for claiming promotion
function claimFreeTrial() {
    if (promotionSystem) {
        return promotionSystem.claimFreeTrial();
    }
    return false;
}
