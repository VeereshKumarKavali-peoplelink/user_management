const User = require("../models/user.js");

// POST /users
exports.createUser = async (req, res) => {
  try {
    const { name, email, password,  role } = req.body;
    if (name && email && password && role){
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        res.status(200).json({ message: "User created successfully", data: newUser });
    }else{
        res.status(400).send({ error: "BAD Request" });
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};



//API to get user
exports.getUser= async (request, response) => {
    try {
        const { email } = request.query;
        const user = await User.findOne({ email }, { _id: true, email: true , name: true, role: true});
        response.status(200).send({ userId: user._id, userName: user.name ,userRole: user.role});
    } catch (error) {
        response.status(500).send({ err_msg: "Internal Server Error" });
    }
}



// GET /users
exports.getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search=""} = req.query;
    const filter = { };
    filter.$or = [{ name: { $regex: search, $options: "i" } }, { email: { $regex: search, $options: "i" } }];
    const users = await User.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.status(200).json({data: users});
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// PUT /users/:id
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({data: user});
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({_id: id});
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getHome =async (req, res)=>{
    try {
        const userRole = req.user.role;  
        if (userRole === "admin") {
          return res.status(200).json({ message: "Welcome Admin" });
        }
        res.status(200).json({ message: "Welcome User" });

    }catch (err){
        console.log("Error:", err);
        res.status(500).send({ error: "Internal Server Error" });
    }
}



