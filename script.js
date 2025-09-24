// DOM Elements
const loginPage = document.getElementById('loginPage');
const customerDashboard = document.getElementById('customerDashboard');
const collectorDashboard = document.getElementById('collectorDashboard');
const userTypeSelection = document.getElementById('userTypeSelection');
const customerLoginContainer = document.getElementById('customerLoginContainer');
const customerRegisterContainer = document.getElementById('customerRegisterContainer');
const collectorLoginContainer = document.getElementById('collectorLoginContainer');
const collectorRegisterContainer = document.getElementById('collectorRegisterContainer');
const customerLoginForm = document.getElementById('customerLoginForm');
const customerRegisterForm = document.getElementById('customerRegisterForm');
const collectorLoginForm = document.getElementById('collectorLoginForm');
const collectorRegisterForm = document.getElementById('collectorRegisterForm');
const logoutBtn = document.getElementById('logoutBtn');
const collectorLogoutBtn = document.getElementById('collectorLogoutBtn');
const menuToggle = document.getElementById('menuToggle');
const collectorMenuToggle = document.getElementById('collectorMenuToggle');
const sidebar = document.getElementById('sidebar');
const collectorSidebar = document.getElementById('collectorSidebar');
const mainContent = document.getElementById('mainContent');
const collectorMainContent = document.getElementById('collectorMainContent');
const navItems = document.querySelectorAll('.nav-item');
const collectorNavItems = document.querySelectorAll('#collectorSidebar .nav-item');
const dashboardSections = document.querySelectorAll('#customerDashboard .dashboard-section');
const collectorDashboardSections = document.querySelectorAll('#collectorDashboard .dashboard-section');
const themeToggle = document.getElementById('themeToggle');
const collectorThemeToggle = document.getElementById('collectorThemeToggle');
const toast = document.getElementById('toast');
const statValues = document.querySelectorAll('.stat-value');
const collectorStatValues = document.querySelectorAll('#collectorDashboard .stat-value');
const userName = document.getElementById('userName');
const userTypeBadge = document.getElementById('userTypeBadge');
const collectorUserName = document.getElementById('collectorUserName');
const collectorUserTypeBadge = document.getElementById('collectorUserTypeBadge');
const profileUserName = document.getElementById('profileUserName');
const profileUserEmail = document.getElementById('profileUserEmail');
const profileUserPhone = document.getElementById('profileUserPhone');
const collectorProfileName = document.getElementById('collectorProfileName');
const collectorProfileEmail = document.getElementById('collectorProfileEmail');
const collectorProfilePhone = document.getElementById('collectorProfilePhone');
const collectorProfileFullName = document.getElementById('collectorProfileFullName');
const collectorProfileFullEmail = document.getElementById('collectorProfileFullEmail');
const collectorProfileFullPhone = document.getElementById('collectorProfileFullPhone');

// User type selection buttons
const customerBtn = document.getElementById('customerBtn');
const collectorBtn = document.getElementById('collectorBtn');
const backToUserTypeBtn = document.getElementById('backToUserTypeBtn');
const backToUserTypeBtn2 = document.getElementById('backToUserTypeBtn2');

// Customer form buttons
const showCustomerRegisterBtn = document.getElementById('showCustomerRegisterBtn');
const backToCustomerLoginBtn = document.getElementById('backToCustomerLoginBtn');
const sendCustomerOtpBtn = document.getElementById('sendCustomerOtpBtn');
const verifyCustomerOtpBtn = document.getElementById('verifyCustomerOtpBtn');
const resendCustomerOtpBtn = document.getElementById('resendCustomerOtpBtn');
const customerRegisterBtn = document.getElementById('customerRegisterBtn');
const customerOtpInputs = document.querySelectorAll('[id^="customerOtp"]');
const customerRegPassword = document.getElementById('customerRegPassword');
const customerRegConfirmPassword = document.getElementById('customerRegConfirmPassword');
const customerPasswordStrengthMeter = document.getElementById('customerPasswordStrengthMeter');
const customerPasswordFeedback = document.getElementById('customerPasswordFeedback');

// Collector form buttons
const showCollectorRegisterBtn = document.getElementById('showCollectorRegisterBtn');
const backToCollectorLoginBtn = document.getElementById('backToCollectorLoginBtn');
const sendCollectorOtpBtn = document.getElementById('sendCollectorOtpBtn');
const verifyCollectorOtpBtn = document.getElementById('verifyCollectorOtpBtn');
const resendCollectorOtpBtn = document.getElementById('resendCollectorOtpBtn');
const collectorRegisterBtn = document.getElementById('collectorRegisterBtn');
const collectorOtpInputs = document.querySelectorAll('[id^="collectorOtp"]');
const collectorRegPassword = document.getElementById('collectorRegPassword');
const collectorRegConfirmPassword = document.getElementById('collectorRegConfirmPassword');
const collectorPasswordStrengthMeter = document.getElementById('collectorPasswordStrengthMeter');
const collectorPasswordFeedback = document.getElementById('collectorPasswordFeedback');

// Password toggle buttons
const passwordToggles = document.querySelectorAll('.password-toggle');

// Waste Calculator Elements
const wasteTypesGrid = document.getElementById('wasteTypesGrid');
const subtotalValue = document.getElementById('subtotalValue');
const pickupFee = document.getElementById('pickupFee');
const totalValue = document.getElementById('totalValue');
const pickupRequirement = document.getElementById('pickupRequirement');
const schedulePickupBtn = document.getElementById('schedulePickupBtn');

// Address Elements
const editAddressBtn = document.getElementById('editAddressBtn');
const saveAddressBtn = document.getElementById('saveAddressBtn');
const cancelAddressBtn = document.getElementById('cancelAddressBtn');
const addressDisplay = document.getElementById('addressDisplay');
const addressInput = document.getElementById('addressInput');
const addressFieldValue = document.getElementById('addressFieldValue');

// Fare Calculator Elements
const calculateFareBtn = document.getElementById('calculateFareBtn');
const fareResult = document.getElementById('fareResult');
const distanceInput = document.getElementById('distance');
const wasteTypeSelect = document.getElementById('wasteType');
const weightInput = document.getElementById('weight');
const baseFare = document.getElementById('baseFare');
const distanceFare = document.getElementById('distanceFare');
const weightFare = document.getElementById('weightFare');
const wasteBonus = document.getElementById('wasteBonus');
const totalFare = document.getElementById('totalFare');

// Time Estimation Elements
const calculateTimeBtn = document.getElementById('calculateTimeBtn');
const timeResult = document.getElementById('timeResult');
const currentLocationInput = document.getElementById('currentLocation');
const destinationInput = document.getElementById('destination');
const trafficSelect = document.getElementById('traffic');
const timeResultValue = document.getElementById('timeResultValue');

// Cancel Pickup Modal Elements
const cancelPickupModal = document.getElementById('cancelPickupModal');
const modalClose = document.getElementById('modalClose');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const confirmCancelBtn = document.getElementById('confirmCancelBtn');
const reasonOther = document.getElementById('reasonOther');
const otherReasonContainer = document.getElementById('otherReasonContainer');
const otherReasonText = document.getElementById('otherReasonText');
const cancelPickupBtns = document.querySelectorAll('.cancel-pickup-btn');

// Pickup Details Modal Elements
const pickupDetailsModal = document.getElementById('pickupDetailsModal');
const pickupDetailsModalClose = document.getElementById('pickupDetailsModalClose');
const closePickupDetailsBtn = document.getElementById('closePickupDetailsBtn');
const cancelFromDetailsBtn = document.getElementById('cancelFromDetailsBtn');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

// Settings Elements
const customerSettingsForm = document.getElementById('customerSettingsForm');
const collectorSettingsForm = document.getElementById('collectorSettingsForm');
const customerCancelSettingsBtn = document.getElementById('customerCancelSettingsBtn');
const collectorCancelSettingsBtn = document.getElementById('collectorCancelSettingsBtn');

// Notification Toggle Elements
const customerEmailNotifications = document.getElementById('customerEmailNotifications');
const customerSmsNotifications = document.getElementById('customerSmsNotifications');
const collectorEmailNotifications = document.getElementById('collectorEmailNotifications');
const collectorSmsNotifications = document.getElementById('collectorSmsNotifications');
const collectorPaymentNotifications = document.getElementById('collectorPaymentNotifications');

// Password validation criteria
const customerPasswordCriteria = {
    length: { regex: /.{8,}/, element: document.getElementById('customerLength') },
    uppercase: { regex: /[A-Z]/, element: document.getElementById('customerUppercase') },
    lowercase: { regex: /[a-z]/, element: document.getElementById('customerLowercase') },
    number: { regex: /[0-9]/, element: document.getElementById('customerNumber') },
    special: { regex: /[^A-Za-z0-9]/, element: document.getElementById('customerSpecial') }
};

const collectorPasswordCriteria = {
    length: { regex: /.{8,}/, element: document.getElementById('collectorLength') },
    uppercase: { regex: /[A-Z]/, element: document.getElementById('collectorUppercase') },
    lowercase: { regex: /[a-z]/, element: document.getElementById('collectorLowercase') },
    number: { regex: /[0-9]/, element: document.getElementById('collectorNumber') },
    special: { regex: /[^A-Za-z0-9]/, element: document.getElementById('collectorSpecial') }
};

// Waste types data with realistic Indian market values
const wasteTypes = [
    { id: 'newspaper', name: 'Newspaper', icon: 'fa-newspaper', value: 12, unit: 'kg' },
    { id: 'plastic-bottles', name: 'Plastic Bottles', icon: 'fa-wine-bottle', value: 25, unit: 'kg' },
    { id: 'cardboard', name: 'Cardboard', icon: 'fa-box', value: 10, unit: 'kg' },
    { id: 'glass-bottles', name: 'Glass Bottles', icon: 'fa-wine-glass', value: 8, unit: 'kg' },
    { id: 'aluminum-cans', name: 'Aluminum Cans', icon: 'fa-beer', value: 65, unit: 'kg' },
    { id: 'electronic', name: 'Electronic Waste', icon: 'fa-laptop', value: 120, unit: 'kg' },
    { id: 'batteries', name: 'Batteries', icon: 'fa-battery-full', value: 85, unit: 'kg' },
    { id: 'textiles', name: 'Textiles', icon: 'fa-tshirt', value: 15, unit: 'kg' }
];

// Minimum pickup amount
const minimumPickupAmount = 120;
const pickupFeeAmount = 30;

// Background color classes
const bgClasses = ['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5'];
let currentBgIndex = 0;
let currentUserType = '';
let currentUser = '';
let currentPickupId = '';

// Initialize waste calculator
function initializeWasteCalculator() {
    wasteTypesGrid.innerHTML = '';
    
    wasteTypes.forEach(waste => {
        const wasteCard = document.createElement('div');
        wasteCard.className = 'waste-type-card';
        wasteCard.dataset.wasteId = waste.id;
        wasteCard.dataset.value = waste.value;
        
        wasteCard.innerHTML = `
            <div class="waste-type-icon">
                <i class="fas ${waste.icon}"></i>
            </div>
            <div class="waste-type-name">${waste.name}</div>
            <div class="waste-type-value">₹${waste.value.toFixed(2)} per ${waste.unit}</div>
            <div class="waste-quantity-container">
                <input type="number" class="waste-quantity-input" min="0" step="0.1" value="0" data-waste-id="${waste.id}">
                <span class="waste-quantity-unit">${waste.unit}</span>
            </div>
        `;
        
        wasteCard.addEventListener('click', function(e) {
            if (!e.target.classList.contains('waste-quantity-input')) {
                this.classList.toggle('selected');
                const input = this.querySelector('.waste-quantity-input');
                if (this.classList.contains('selected') && input.value === '0') {
                    input.value = '1';
                } else if (!this.classList.contains('selected')) {
                    input.value = '0';
                }
                updateWasteCalculator();
            }
        });
        
        const quantityInput = wasteCard.querySelector('.waste-quantity-input');
        quantityInput.addEventListener('input', function() {
            if (this.value > 0) {
                wasteCard.classList.add('selected');
            } else {
                wasteCard.classList.remove('selected');
            }
            updateWasteCalculator();
        });
        
        wasteTypesGrid.appendChild(wasteCard);
    });
    
    updateWasteCalculator();
}

// Update waste calculator calculations
function updateWasteCalculator() {
    let subtotal = 0;
    
    wasteTypes.forEach(waste => {
        const input = document.querySelector(`input[data-waste-id="${waste.id}"]`);
        const quantity = parseFloat(input.value) || 0;
        subtotal += quantity * waste.value;
    });
    
    // Apply pickup fee logic
    let effectivePickupFee = pickupFeeAmount;
    if (subtotal >= minimumPickupAmount) {
        effectivePickupFee = 0;
    }
    
    const total = Math.max(0, subtotal - effectivePickupFee);
    
    subtotalValue.textContent = `₹${subtotal.toFixed(2)}`;
    pickupFee.textContent = `₹${effectivePickupFee.toFixed(2)}${effectivePickupFee === 0 ? ' (Waived)' : ''}`;
    totalValue.textContent = `₹${total.toFixed(2)}`;
    
    // Update pickup requirement
    if (subtotal >= minimumPickupAmount) {
        pickupRequirement.className = 'pickup-requirement met';
        pickupRequirement.innerHTML = `
            <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
            Minimum pickup amount met: ₹${minimumPickupAmount.toFixed(2)} (Current: ₹${subtotal.toFixed(2)})
        `;
        schedulePickupBtn.disabled = false;
    } else {
        pickupRequirement.className = 'pickup-requirement not-met';
        pickupRequirement.innerHTML = `
            <i class="fas fa-info-circle" style="margin-right: 0.5rem;"></i>
            Minimum pickup amount: ₹${minimumPickupAmount.toFixed(2)} (Current: ₹${subtotal.toFixed(2)})
        `;
        schedulePickupBtn.disabled = true;
    }
}

// Schedule pickup button
schedulePickupBtn.addEventListener('click', function() {
    if (!this.disabled) {
        showToast('Pickup scheduled successfully!', 'success');
        
        // Reset calculator after successful scheduling
        setTimeout(() => {
            initializeWasteCalculator();
        }, 2000);
    }
});

// Address editing functionality
editAddressBtn.addEventListener('click', function() {
    addressDisplay.classList.add('hidden');
    addressInput.classList.add('active');
    editAddressBtn.style.display = 'none';
    saveAddressBtn.style.display = 'inline-block';
    cancelAddressBtn.style.display = 'inline-block';
});

saveAddressBtn.addEventListener('click', function() {
    const newAddress = addressFieldValue.value;
    addressDisplay.textContent = newAddress;
    addressDisplay.classList.remove('hidden');
    addressInput.classList.remove('active');
    editAddressBtn.style.display = 'inline-block';
    saveAddressBtn.style.display = 'none';
    cancelAddressBtn.style.display = 'none';
    showToast('Address updated successfully!', 'success');
});

cancelAddressBtn.addEventListener('click', function() {
    addressDisplay.classList.remove('hidden');
    addressInput.classList.remove('active');
    editAddressBtn.style.display = 'inline-block';
    saveAddressBtn.style.display = 'none';
    cancelAddressBtn.style.display = 'none';
    // Reset to original value
    addressFieldValue.value = addressDisplay.textContent;
});

// Change background color on button click
function changeBackgroundColor() {
    // Remove current background class
    document.body.classList.remove(bgClasses[currentBgIndex]);
    
    // Move to next background class
    currentBgIndex = (currentBgIndex + 1) % bgClasses.length;
    
    // Apply new background class
    document.body.classList.add(bgClasses[currentBgIndex]);
}

// Add click event to all buttons to change background
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        changeBackgroundColor();
    }
});

// User type selection
customerBtn.addEventListener('click', () => {
    currentUserType = 'customer';
    userTypeSelection.style.display = 'none';
    customerLoginContainer.style.display = 'block';
});

collectorBtn.addEventListener('click', () => {
    currentUserType = 'collector';
    userTypeSelection.style.display = 'none';
    collectorLoginContainer.style.display = 'block';
});

backToUserTypeBtn.addEventListener('click', () => {
    customerLoginContainer.style.display = 'none';
    userTypeSelection.style.display = 'block';
});

backToUserTypeBtn2.addEventListener('click', () => {
    collectorLoginContainer.style.display = 'none';
    userTypeSelection.style.display = 'block';
});

// Show customer registration form
showCustomerRegisterBtn.addEventListener('click', () => {
    customerLoginContainer.style.display = 'none';
    customerRegisterContainer.style.display = 'block';
    resetCustomerRegistrationForm();
});

// Back to customer login form
backToCustomerLoginBtn.addEventListener('click', () => {
    customerRegisterContainer.style.display = 'none';
    customerLoginContainer.style.display = 'block';
});

// Show collector registration form
showCollectorRegisterBtn.addEventListener('click', () => {
    collectorLoginContainer.style.display = 'none';
    collectorRegisterContainer.style.display = 'block';
    resetCollectorRegistrationForm();
});

// Back to collector login form
backToCollectorLoginBtn.addEventListener('click', () => {
    collectorRegisterContainer.style.display = 'none';
    collectorLoginContainer.style.display = 'block';
});

// Password toggle functionality
passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-target');
        const targetInput = document.getElementById(targetId);
        const icon = toggle.querySelector('i');
        
        if (targetInput.type === 'password') {
            targetInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            targetInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// Customer Send OTP
sendCustomerOtpBtn.addEventListener('click', () => {
    const username = document.getElementById('customerRegUsername').value;
    const mobile = document.getElementById('customerRegMobile').value;
    
    if (username && mobile && mobile.length === 10) {
        // Simulate sending OTP
        showToast('OTP sent to your mobile number', 'success');
        
        // Move to step 2
        document.getElementById('customerRegisterStep1').classList.remove('active');
        document.getElementById('customerRegisterStep2').classList.add('active');
        document.getElementById('customerStep1').classList.add('completed');
        document.getElementById('customerStep2').classList.add('active');
        
        // Focus first OTP input
        document.getElementById('customerOtp1').focus();
    } else {
        showToast('Please enter valid username and mobile number', 'error');
    }
});

// Customer OTP input handling
customerOtpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < customerOtpInputs.length - 1) {
            customerOtpInputs[index + 1].focus();
        }
    });
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            customerOtpInputs[index - 1].focus();
        }
    });
});

// Customer Verify OTP
verifyCustomerOtpBtn.addEventListener('click', () => {
    const otp = Array.from(customerOtpInputs).map(input => input.value).join('');
    
    if (otp.length === 6) {
        // Simulate OTP verification
        showToast('OTP verified successfully', 'success');
        
        // Move to step 3
        document.getElementById('customerRegisterStep2').classList.remove('active');
        document.getElementById('customerRegisterStep3').classList.add('active');
        document.getElementById('customerStep2').classList.add('completed');
        document.getElementById('customerStep3').classList.add('active');
    } else {
        showToast('Please enter valid OTP', 'error');
    }
});

// Customer Resend OTP
resendCustomerOtpBtn.addEventListener('click', () => {
    showToast('OTP resent to your mobile number', 'success');
    // Clear OTP inputs
    customerOtpInputs.forEach(input => input.value = '');
    document.getElementById('customerOtp1').focus();
});

// Customer Password strength validation
customerRegPassword.addEventListener('input', () => {
    const password = customerRegPassword.value;
    let strength = 0;
    
    // Check each criteria
    Object.keys(customerPasswordCriteria).forEach(key => {
        if (customerPasswordCriteria[key].regex.test(password)) {
            customerPasswordCriteria[key].element.classList.add('valid');
            customerPasswordCriteria[key].element.classList.remove('invalid');
            customerPasswordCriteria[key].element.querySelector('i').className = 'fas fa-check-circle';
            strength++;
        } else {
            customerPasswordCriteria[key].element.classList.remove('valid');
            customerPasswordCriteria[key].element.classList.add('invalid');
            customerPasswordCriteria[key].element.querySelector('i').className = 'fas fa-times-circle';
        }
    });
    
    // Update strength meter
    const strengthPercentage = (strength / 5) * 100;
    customerPasswordStrengthMeter.style.width = `${strengthPercentage}%`;
    
    // Set color based on strength
    if (strength < 2) {
        customerPasswordStrengthMeter.style.backgroundColor = '#e74c3c'; // Weak
    } else if (strength < 4) {
        customerPasswordStrengthMeter.style.backgroundColor = '#f1c40f'; // Medium
    } else {
        customerPasswordStrengthMeter.style.backgroundColor = '#27ae60'; // Strong
    }
});

// Customer Confirm password validation
customerRegConfirmPassword.addEventListener('input', () => {
    if (customerRegPassword.value !== customerRegConfirmPassword.value) {
        customerRegConfirmPassword.setCustomValidity('Passwords do not match');
    } else {
        customerRegConfirmPassword.setCustomValidity('');
    }
});

// Customer Registration form submission
customerRegisterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const password = customerRegPassword.value;
    const confirmPassword = customerRegConfirmPassword.value;
    
    // Check if password meets all criteria
    let isValid = true;
    Object.keys(customerPasswordCriteria).forEach(key => {
        if (!customerPasswordCriteria[key].regex.test(password)) {
            isValid = false;
        }
    });
    
    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    if (!isValid) {
        showToast('Password does not meet all requirements', 'error');
        return;
    }
    
    // Simulate successful registration
    showToast('Registration successful! Please login with your credentials', 'success');
    
    // Reset form and show login
    setTimeout(() => {
        customerRegisterContainer.style.display = 'none';
        customerLoginContainer.style.display = 'block';
        resetCustomerRegistrationForm();
    }, 2000);
});

// Reset customer registration form
function resetCustomerRegistrationForm() {
    customerRegisterForm.reset();
    document.querySelectorAll('#customerRegisterContainer .register-step').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelectorAll('#customerRegisterContainer .step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    document.getElementById('customerRegisterStep1').classList.add('active');
    document.getElementById('customerStep1').classList.add('active');
    
    // Reset password validation
    Object.keys(customerPasswordCriteria).forEach(key => {
        customerPasswordCriteria[key].element.classList.remove('valid');
        customerPasswordCriteria[key].element.classList.add('invalid');
        customerPasswordCriteria[key].element.querySelector('i').className = 'fas fa-times-circle';
    });
    customerPasswordStrengthMeter.style.width = '0%';
}

// Collector Send OTP
sendCollectorOtpBtn.addEventListener('click', () => {
    const username = document.getElementById('collectorRegUsername').value;
    const mobile = document.getElementById('collectorRegMobile').value;
    
    if (username && mobile && mobile.length === 10) {
        // Simulate sending OTP
        showToast('OTP sent to your mobile number', 'success');
        
        // Move to step 2
        document.getElementById('collectorRegisterStep1').classList.remove('active');
        document.getElementById('collectorRegisterStep2').classList.add('active');
        document.getElementById('collectorStep1').classList.add('completed');
        document.getElementById('collectorStep2').classList.add('active');
        
        // Focus first OTP input
        document.getElementById('collectorOtp1').focus();
    } else {
        showToast('Please enter valid username and mobile number', 'error');
    }
});

// Collector OTP input handling
collectorOtpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < collectorOtpInputs.length - 1) {
            collectorOtpInputs[index + 1].focus();
        }
    });
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            collectorOtpInputs[index - 1].focus();
        }
    });
});

// Collector Verify OTP
verifyCollectorOtpBtn.addEventListener('click', () => {
    const otp = Array.from(collectorOtpInputs).map(input => input.value).join('');
    
    if (otp.length === 6) {
        // Simulate OTP verification
        showToast('OTP verified successfully', 'success');
        
        // Move to step 3
        document.getElementById('collectorRegisterStep2').classList.remove('active');
        document.getElementById('collectorRegisterStep3').classList.add('active');
        document.getElementById('collectorStep2').classList.add('completed');
        document.getElementById('collectorStep3').classList.add('active');
    } else {
        showToast('Please enter valid OTP', 'error');
    }
});

// Collector Resend OTP
resendCollectorOtpBtn.addEventListener('click', () => {
    showToast('OTP resent to your mobile number', 'success');
    // Clear OTP inputs
    collectorOtpInputs.forEach(input => input.value = '');
    document.getElementById('collectorOtp1').focus();
});

// Collector Password strength validation
collectorRegPassword.addEventListener('input', () => {
    const password = collectorRegPassword.value;
    let strength = 0;
    
    // Check each criteria
    Object.keys(collectorPasswordCriteria).forEach(key => {
        if (collectorPasswordCriteria[key].regex.test(password)) {
            collectorPasswordCriteria[key].element.classList.add('valid');
            collectorPasswordCriteria[key].element.classList.remove('invalid');
            collectorPasswordCriteria[key].element.querySelector('i').className = 'fas fa-check-circle';
            strength++;
        } else {
            collectorPasswordCriteria[key].element.classList.remove('valid');
            collectorPasswordCriteria[key].element.classList.add('invalid');
            collectorPasswordCriteria[key].element.querySelector('i').className = 'fas fa-times-circle';
        }
    });
    
    // Update strength meter
    const strengthPercentage = (strength / 5) * 100;
    collectorPasswordStrengthMeter.style.width = `${strengthPercentage}%`;
    
    // Set color based on strength
    if (strength < 2) {
        collectorPasswordStrengthMeter.style.backgroundColor = '#e74c3c'; // Weak
    } else if (strength < 4) {
        collectorPasswordStrengthMeter.style.backgroundColor = '#f1c40f'; // Medium
    } else {
        collectorPasswordStrengthMeter.style.backgroundColor = '#27ae60'; // Strong
    }
});

// Collector Confirm password validation
collectorRegConfirmPassword.addEventListener('input', () => {
    if (collectorRegPassword.value !== collectorRegConfirmPassword.value) {
        collectorRegConfirmPassword.setCustomValidity('Passwords do not match');
    } else {
        collectorRegConfirmPassword.setCustomValidity('');
    }
});

// Collector Registration form submission
collectorRegisterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const password = collectorRegPassword.value;
    const confirmPassword = collectorRegConfirmPassword.value;
    
    // Check if password meets all criteria
    let isValid = true;
    Object.keys(collectorPasswordCriteria).forEach(key => {
        if (!collectorPasswordCriteria[key].regex.test(password)) {
            isValid = false;
        }
    });
    
    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    if (!isValid) {
        showToast('Password does not meet all requirements', 'error');
        return;
    }
    
    // Simulate successful registration
    showToast('Registration successful! Please login with your credentials', 'success');
    
    // Reset form and show login
    setTimeout(() => {
        collectorRegisterContainer.style.display = 'none';
        collectorLoginContainer.style.display = 'block';
        resetCollectorRegistrationForm();
    }, 2000);
});

// Reset collector registration form
function resetCollectorRegistrationForm() {
    collectorRegisterForm.reset();
    document.querySelectorAll('#collectorRegisterContainer .register-step').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelectorAll('#collectorRegisterContainer .step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    document.getElementById('collectorRegisterStep1').classList.add('active');
    document.getElementById('collectorStep1').classList.add('active');
    
    // Reset password validation
    Object.keys(collectorPasswordCriteria).forEach(key => {
        collectorPasswordCriteria[key].element.classList.remove('valid');
        collectorPasswordCriteria[key].element.classList.add('invalid');
        collectorPasswordCriteria[key].element.querySelector('i').className = 'fas fa-times-circle';
    });
    collectorPasswordStrengthMeter.style.width = '0%';
}

// Customer Login functionality
customerLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('customerEmail').value;
    const password = document.getElementById('customerPassword').value;
    
    if (email && password) {
        // Store user information
        currentUser = email;
        currentUserType = 'customer';
        
        // Simulate login success
        loginPage.style.display = 'none';
        customerDashboard.classList.add('active');
        showToast('Login successful!', 'success');
        updateCustomerDashboardUserInfo();
        animateCounters();
        initializeWasteCalculator();
    }
});

// Collector Login functionality
collectorLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('collectorEmail').value;
    const password = document.getElementById('collectorPassword').value;
    
    if (email && password) {
        // Store user information
        currentUser = email;
        currentUserType = 'collector';
        
        // Simulate login success
        loginPage.style.display = 'none';
        collectorDashboard.classList.add('active');
        showToast('Login successful!', 'success');
        updateCollectorDashboardUserInfo();
        animateCollectorCounters();
    }
});

// Update customer dashboard user information
function updateCustomerDashboardUserInfo() {
    // Update header
    userName.textContent = currentUser;
    userTypeBadge.textContent = currentUserType.charAt(0).toUpperCase() + currentUserType.slice(1);
    
    // Update profile section
    profileUserName.textContent = currentUser;
    profileUserEmail.textContent = currentUser;
    
    // Update profile based on user type
    if (currentUserType === 'customer') {
        profileUserPhone.textContent = '+91 (555) 123-4567';
    }
}

// Update collector dashboard user information
function updateCollectorDashboardUserInfo() {
    // Update header
    collectorUserName.textContent = currentUser;
    collectorUserTypeBadge.textContent = currentUserType.charAt(0).toUpperCase() + currentUserType.slice(1);
    
    // Update profile section
    collectorProfileName.textContent = currentUser;
    collectorProfileEmail.textContent = currentUser;
    collectorProfilePhone.textContent = '+91 (555) 987-6543';
    
    collectorProfileFullName.textContent = currentUser;
    collectorProfileFullEmail.textContent = currentUser;
    collectorProfileFullPhone.textContent = '+91 (555) 987-6543';
}

// Customer Logout functionality
logoutBtn.addEventListener('click', () => {
    customerDashboard.classList.remove('active');
    loginPage.style.display = 'flex';
    userTypeSelection.style.display = 'block';
    customerLoginContainer.style.display = 'none';
    customerRegisterContainer.style.display = 'none';
    showToast('Logged out successfully!', 'success');
    
    // Clear form inputs
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerPassword').value = '';
});

// Collector Logout functionality
collectorLogoutBtn.addEventListener('click', () => {
    collectorDashboard.classList.remove('active');
    loginPage.style.display = 'flex';
    userTypeSelection.style.display = 'block';
    collectorLoginContainer.style.display = 'none';
    collectorRegisterContainer.style.display = 'none';
    showToast('Logged out successfully!', 'success');
    
    // Clear form inputs
    document.getElementById('collectorEmail').value = '';
    document.getElementById('collectorPassword').value = '';
});

// Mobile menu toggle for customer
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
});

// Mobile menu toggle for collector
collectorMenuToggle.addEventListener('click', () => {
    collectorSidebar.classList.toggle('mobile-open');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !menuToggle.contains(e.target) && 
        sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
    }
    
    if (window.innerWidth <= 768 && 
        !collectorSidebar.contains(e.target) && 
        !collectorMenuToggle.contains(e.target) && 
        collectorSidebar.classList.contains('mobile-open')) {
        collectorSidebar.classList.remove('mobile-open');
    }
});

// Customer Navigation functionality
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active nav item
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Show corresponding section
        const sectionId = item.getAttribute('data-section');
        dashboardSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
        
        // Initialize waste calculator when navigating to it
        if (sectionId === 'calculator') {
            initializeWasteCalculator();
        }
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('mobile-open');
        }
    });
});

// Collector Navigation functionality
collectorNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active nav item
        collectorNavItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Show corresponding section
        const sectionId = item.getAttribute('data-section');
        collectorDashboardSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            collectorSidebar.classList.remove('mobile-open');
        }
    });
});

// Customer Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        showToast('Dark mode enabled', 'success');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        showToast('Light mode enabled', 'success');
    }
});

// Collector Theme toggle
collectorThemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = collectorThemeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        showToast('Dark mode enabled', 'success');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        showToast('Light mode enabled', 'success');
    }
});

// Fare Calculator functionality
calculateFareBtn.addEventListener('click', () => {
    const distance = parseFloat(distanceInput.value) || 0;
    const wasteType = wasteTypeSelect.value;
    const weight = parseFloat(weightInput.value) || 0;
    
    if (distance > 0 && wasteType && weight > 0) {
        // Calculate base fare (fixed amount)
        const base = 50;
        
        // Calculate distance fare (per km)
        const distanceRate = 10;
        const distanceAmount = distance * distanceRate;
        
        // Calculate weight fare (per kg)
        const weightRate = 5;
        const weightAmount = weight * weightRate;
        
        // Calculate waste type bonus
        let bonus = 0;
        switch(wasteType) {
            case 'electronic':
                bonus = 30;
                break;
            case 'batteries':
                bonus = 25;
                break;
            case 'metal':
                bonus = 20;
                break;
            case 'glass':
                bonus = 15;
                break;
            case 'plastic':
                bonus = 10;
                break;
            case 'paper':
                bonus = 5;
                break;
            default:
                bonus = 0;
        }
        
        // Calculate total fare
        const total = base + distanceAmount + weightAmount + bonus;
        
        // Update UI
        baseFare.textContent = `₹${base.toFixed(2)}`;
        distanceFare.textContent = `₹${distanceAmount.toFixed(2)}`;
        weightFare.textContent = `₹${weightAmount.toFixed(2)}`;
        wasteBonus.textContent = `₹${bonus.toFixed(2)}`;
        totalFare.textContent = `₹${total.toFixed(2)}`;
        
        // Show result
        fareResult.style.display = 'block';
    } else {
        showToast('Please fill all fields with valid values', 'error');
    }
});

// Time Estimation functionality
calculateTimeBtn.addEventListener('click', () => {
    const currentLocation = currentLocationInput.value.trim();
    const destination = destinationInput.value.trim();
    const traffic = trafficSelect.value;
    
    if (currentLocation && destination) {
        // Simulate API call to calculate time
        // In a real application, this would use a mapping service API
        
        // Base time in minutes (simulated)
        let baseTime = 15;
        
        // Adjust based on traffic conditions
        switch(traffic) {
            case 'low':
                baseTime = baseTime * 0.8;
                break;
            case 'moderate':
                baseTime = baseTime * 1.2;
                break;
            case 'high':
                baseTime = baseTime * 1.8;
                break;
        }
        
        // Round to nearest 5 minutes
        const estimatedTime = Math.round(baseTime / 5) * 5;
        
        // Update UI
        timeResultValue.textContent = `${estimatedTime} min`;
        
        // Show result
        timeResult.style.display = 'block';
    } else {
        showToast('Please enter both current location and destination', 'error');
    }
});

// Cancel Pickup Modal functionality
cancelPickupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentPickupId = btn.getAttribute('data-pickup-id');
        cancelPickupModal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    cancelPickupModal.classList.remove('active');
    resetCancelPickupModal();
});

cancelModalBtn.addEventListener('click', () => {
    cancelPickupModal.classList.remove('active');
    resetCancelPickupModal();
});

reasonOther.addEventListener('change', () => {
    if (reasonOther.checked) {
        otherReasonContainer.style.display = 'block';
    } else {
        otherReasonContainer.style.display = 'none';
    }
});

confirmCancelBtn.addEventListener('click', () => {
    const selectedReason = document.querySelector('input[name="cancelReason"]:checked');
    
    if (selectedReason) {
        let reason = selectedReason.value;
        
        if (reason === 'other') {
            const otherReason = otherReasonText.value.trim();
            if (otherReason) {
                reason = otherReason;
            } else {
                showToast('Please specify the reason for cancellation', 'error');
                return;
            }
        }
        
        // Simulate API call to cancel pickup
        showToast(`Pickup #${currentPickupId} cancelled successfully`, 'success');
        
        // In a real application, you would update the pickup status in the database
        // and refresh the pickup list
        
        // Close modal
        cancelPickupModal.classList.remove('active');
        resetCancelPickupModal();
        
        // Refresh the page to show updated pickup status
        setTimeout(() => {
            location.reload();
        }, 1500);
    } else {
        showToast('Please select a reason for cancellation', 'error');
    }
});

function resetCancelPickupModal() {
    document.querySelectorAll('input[name="cancelReason"]').forEach(radio => {
        radio.checked = false;
    });
    otherReasonContainer.style.display = 'none';
    otherReasonText.value = '';
    currentPickupId = '';
}

// Pickup Details Modal functionality
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const pickupId = btn.getAttribute('data-pickup-id');
        showPickupDetails(pickupId);
    });
});

pickupDetailsModalClose.addEventListener('click', () => {
    pickupDetailsModal.classList.remove('active');
});

closePickupDetailsBtn.addEventListener('click', () => {
    pickupDetailsModal.classList.remove('active');
});

cancelFromDetailsBtn.addEventListener('click', () => {
    pickupDetailsModal.classList.remove('active');
    currentPickupId = document.getElementById('detailPickupId').textContent.replace('#', '');
    cancelPickupModal.classList.add('active');
});

function showPickupDetails(pickupId) {
    // Simulate fetching pickup details based on ID
    // In a real application, this would be an API call
    
    // Sample data based on pickup ID
    const pickupData = {
        'PCK-2023-1056': {
            id: '#PCK-2023-1056',
            status: 'pending',
            date: 'October 16, 2023',
            time: '10:30 AM',
            customerName: 'Rajesh Kumar',
            customerPhone: '+91 98765 43210',
            customerEmail: 'rajesh@example.com',
            address: '45 Park Avenue, Green Hills, Bangalore 560001',
            landmark: 'Near City Mall',
            wasteItems: [
                { type: 'Plastic', weight: '5.0 kg' },
                { type: 'Paper', weight: '3.5 kg' }
            ],
            totalWeight: '8.5 kg',
            baseFare: '₹50.00',
            distanceFare: '₹60.00',
            weightFare: '₹40.00',
            wasteBonus: '₹30.00',
            totalFare: '₹180.00'
        },
        'PCK-2023-1057': {
            id: '#PCK-2023-1057',
            status: 'pending',
            date: 'October 16, 2023',
            time: '2:15 PM',
            customerName: 'Priya Sharma',
            customerPhone: '+91 98765 43211',
            customerEmail: 'priya@example.com',
            address: '21 Lake View, Eco City, Bangalore 560078',
            landmark: 'Opposite Lake Park',
            wasteItems: [
                { type: 'Electronic', weight: '3.2 kg' },
                { type: 'Glass', weight: '2.0 kg' }
            ],
            totalWeight: '5.2 kg',
            baseFare: '₹50.00',
            distanceFare: '₹70.00',
            weightFare: '₹25.00',
            wasteBonus: '₹65.00',
            totalFare: '₹210.00'
        },
        'PCK-2023-1058': {
            id: '#PCK-2023-1058',
            status: 'cancelled',
            date: 'October 16, 2023',
            time: '4:45 PM',
            customerName: 'Amit Patel',
            customerPhone: '+91 98765 43212',
            customerEmail: 'amit@example.com',
            address: '78 Market Street, Downtown, Bangalore 560001',
            landmark: 'Near Central Market',
            wasteItems: [
                { type: 'Metal', weight: '4.0 kg' },
                { type: 'Cardboard', weight: '2.8 kg' }
            ],
            totalWeight: '6.8 kg',
            baseFare: '₹50.00',
            distanceFare: '₹55.00',
            weightFare: '₹35.00',
            wasteBonus: '₹55.00',
            totalFare: '₹195.00',
            cancelledOn: 'October 16, 2023, 9:15 AM',
            cancellationReason: 'Vehicle breakdown'
        },
        'PCK-2023-1055': {
            id: '#PCK-2023-1055',
            status: 'completed',
            date: 'October 15, 2023',
            time: '3:30 PM',
            customerName: 'Suresh Reddy',
            customerPhone: '+91 98765 43213',
            customerEmail: 'suresh@example.com',
            address: '9 Hill Road, Eco City, Bangalore 560001',
            landmark: 'Near Hill View Apartment',
            wasteItems: [
                { type: 'Plastic', weight: '4.5 kg' },
                { type: 'Glass', weight: '2.7 kg' }
            ],
            totalWeight: '7.2 kg',
            baseFare: '₹50.00',
            distanceFare: '₹65.00',
            wasteBonus: '₹85.00',
            totalFare: '₹200.00'
        }
    };
    
    const data = pickupData[pickupId] || pickupData['PCK-2023-1056'];
    
    // Update modal content
    document.getElementById('detailPickupId').textContent = data.id;
    document.getElementById('detailStatus').innerHTML = getStatusBadge(data.status);
    document.getElementById('detailDate').textContent = data.date;
    document.getElementById('detailTime').textContent = data.time;
    document.getElementById('detailCustomerName').textContent = data.customerName;
    document.getElementById('detailCustomerPhone').textContent = data.customerPhone;
    document.getElementById('detailCustomerEmail').textContent = data.customerEmail;
    document.getElementById('detailAddress').textContent = data.address;
    document.getElementById('detailLandmark').textContent = data.landmark;
    document.getElementById('detailTotalWeight').textContent = data.totalWeight;
    document.getElementById('detailBaseFare').textContent = data.baseFare;
    document.getElementById('detailDistanceFare').textContent = data.distanceFare;
    document.getElementById('detailWeightFare').textContent = data.weightFare || '₹0.00';
    document.getElementById('detailWasteBonus').textContent = data.wasteBonus;
    document.getElementById('detailTotalFare').textContent = data.totalFare;
    
    // Update waste items
    const wasteItemsContainer = document.querySelector('.waste-items');
    wasteItemsContainer.innerHTML = '';
    data.wasteItems.forEach(item => {
        const wasteItem = document.createElement('div');
        wasteItem.className = 'waste-item';
        wasteItem.innerHTML = `
            <span>${item.type}</span>
            <span>${item.weight}</span>
        `;
        wasteItemsContainer.appendChild(wasteItem);
    });
    
    // Show/hide cancellation section
    const cancellationSection = document.getElementById('cancellationSection');
    const cancelFromDetailsBtn = document.getElementById('cancelFromDetailsBtn');
    
    if (data.status === 'cancelled') {
        cancellationSection.style.display = 'block';
        document.getElementById('detailCancelledOn').textContent = data.cancelledOn;
        document.getElementById('detailCancellationReason').textContent = data.cancellationReason;
        cancelFromDetailsBtn.style.display = 'none';
    } else if (data.status === 'pending') {
        cancellationSection.style.display = 'none';
        cancelFromDetailsBtn.style.display = 'inline-block';
        cancelFromDetailsBtn.setAttribute('data-pickup-id', pickupId);
    } else {
        cancellationSection.style.display = 'none';
        cancelFromDetailsBtn.style.display = 'none';
    }
    
    // Show modal
    pickupDetailsModal.classList.add('active');
}

function getStatusBadge(status) {
    const statusClasses = {
        'pending': 'status-badge status-pending',
        'completed': 'status-badge status-completed',
        'cancelled': 'status-badge status-cancelled'
    };
    
    const statusTexts = {
        'pending': 'Pending',
        'completed': 'Completed',
        'cancelled': 'Cancelled'
    };
    
    return `<span class="${statusClasses[status]}">${statusTexts[status]}</span>`;
}

// Customer Settings functionality
customerSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('customerSettingsEmail').value;
    const currentPassword = document.getElementById('customerSettingsCurrentPassword').value;
    const newPassword = document.getElementById('customerSettingsNewPassword').value;
    const confirmPassword = document.getElementById('customerSettingsConfirmPassword').value;
    
    if (!currentPassword) {
        showToast('Please enter your current password', 'error');
        return;
    }
    
    if (newPassword && newPassword !== confirmPassword) {
        showToast('New passwords do not match', 'error');
        return;
    }
    
    // Simulate API call to update settings
    showToast('Settings updated successfully!', 'success');
    
    // Update email in profile if changed
    if (email !== profileUserEmail.textContent) {
        profileUserEmail.textContent = email;
    }
    
    // Reset form
    customerSettingsForm.reset();
    document.getElementById('customerSettingsEmail').value = profileUserEmail.textContent;
});

customerCancelSettingsBtn.addEventListener('click', () => {
    // Reset form
    customerSettingsForm.reset();
    document.getElementById('customerSettingsEmail').value = profileUserEmail.textContent;
});

// Collector Settings functionality
collectorSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('collectorSettingsEmail').value;
    const currentPassword = document.getElementById('collectorSettingsCurrentPassword').value;
    const newPassword = document.getElementById('collectorSettingsNewPassword').value;
    const confirmPassword = document.getElementById('collectorSettingsConfirmPassword').value;
    
    if (!currentPassword) {
        showToast('Please enter your current password', 'error');
        return;
    }
    
    if (newPassword && newPassword !== confirmPassword) {
        showToast('New passwords do not match', 'error');
        return;
    }
    
    // Simulate API call to update settings
    showToast('Settings updated successfully!', 'success');
    
    // Update email in profile if changed
    if (email !== collectorProfileEmail.textContent) {
        collectorProfileEmail.textContent = email;
        collectorProfileFullEmail.textContent = email;
    }
    
    // Reset form
    collectorSettingsForm.reset();
    document.getElementById('collectorSettingsEmail').value = collectorProfileEmail.textContent;
});

collectorCancelSettingsBtn.addEventListener('click', () => {
    // Reset form
    collectorSettingsForm.reset();
    document.getElementById('collectorSettingsEmail').value = collectorProfileEmail.textContent;
});

// Notification toggle functionality
customerEmailNotifications.addEventListener('change', function() {
    showToast(`Email notifications ${this.checked ? 'enabled' : 'disabled'}`, 'success');
});

customerSmsNotifications.addEventListener('change', function() {
    showToast(`SMS notifications ${this.checked ? 'enabled' : 'disabled'}`, 'success');
});

collectorEmailNotifications.addEventListener('change', function() {
    showToast(`Email notifications ${this.checked ? 'enabled' : 'disabled'}`, 'success');
});

collectorSmsNotifications.addEventListener('change', function() {
    showToast(`SMS notifications ${this.checked ? 'enabled' : 'disabled'}`, 'success');
});

collectorPaymentNotifications.addEventListener('change', function() {
    showToast(`Payment notifications ${this.checked ? 'enabled' : 'disabled'}`, 'success');
});

// Toast notification function
function showToast(message, type = 'success') {
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    
    if (type === 'success') {
        toastIcon.className = 'toast-icon fas fa-check-circle';
    } else if (type === 'error') {
        toastIcon.className = 'toast-icon fas fa-exclamation-circle';
        toastIcon.style.color = '#e74c3c';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Animate customer counters
function animateCounters() {
    statValues.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 50;
        
        const updateCounter = () => {
            const current = +counter.innerText;
            
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Animate collector counters
function animateCollectorCounters() {
    collectorStatValues.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 50;
        
        const updateCounter = () => {
            const current = +counter.innerText;
            
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Add scroll animation to cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});