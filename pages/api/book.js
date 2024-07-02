import { withIronSessionApiRoute } from "iron-session/next";
import sessionOptions from "../../config/session"
import db from '../../db'

// this handler runs for /api/book with any request method (GET, POST, etc)
export default withIronSessionApiRoute(
  async function handler(req, res) {

// User info can be accessed with req.session
    // No user info on the session means the user is not logged in

    if(!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

try {
    switch (req.method) {
// TODO: On a POST request, add a book using db.book.add with request body 
      case 'POST':
        return addBook(req, res);
 // TODO: On a DELETE request, remove a book using db.book.remove with request body 
      case 'DELETE':
        return removeBook(req, res);
 // TODO: Respond with 404 for all other requests       
 default:
  return res.status(404).json({ message: 'Not Allowed' });
}
} catch (error) {
console.error('Server error:', error);
return res.status(500).json({ error: error.message });
}
},
  sessionOptions
);
