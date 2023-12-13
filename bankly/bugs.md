### Bug 1:
middleware/auth.js file
in the authUser()
let payload = jwt.decode(token) does not allow for verifying authenticity which can createa security issue as decoding without verification might allow unverified tokens to pass through and allow for unauthorized access

### Bug 2:
routes/users.js
The current code allows for all data from req.body to be updated therefore allowing non-admin users to modify admin fields.  The code does not filter out the first_name, last_name, phone, email data specifically as indicated by the docstrings

### Bug 3:
routes/auth.js
Missing await at the User.authenticate(username, password):  This would allow subsequent code to execute which can lead to token generating before authentication is verified and therefore allowing invalid login attempts, it could also cause the file to go straight to error handling 

### Bug 4:
app.js had a duplicate module.exports = app which could create a potential issue as the second one would override the first which can impact or cause issues with importing data to different parts of the app.  Typically the 1st export attempt though would not really have an aeffect

### Bug 5:
routes/users.js
Delete route is missing an await statement before the User.delete.  This would allow subsequent code to execute which can lead to token generating before authentication is verified and therefore allowing invalid login attempts, it could also cause the file to go straight to error handling 

### Bug 6:
models/users
The static async get(username) method was not correctly throwing an error as it was missing a the throw statement in the event a user was not found.  