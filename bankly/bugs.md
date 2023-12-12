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

