import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    // Verify the token using your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user data to the request
    req.user = decoded;

    next(); // Proceed to next middleware or route
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
