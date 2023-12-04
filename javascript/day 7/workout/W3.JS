// User object
const User = {
  name: 'John',
  welcomeMessage: function() {
    document.write(`Welcome, ${this.name}!`);
  }
};

// Admin object
const admin = {
  name: 'Admin',
};

// Adapt the welcomeMessage function from User to admin using bind
admin.welcomeMessage = User.welcomeMessage.bind(admin);

// Now admin has its own welcomeMessage function
admin.welcomeMessage(); // Outputs: Welcome, Admin!