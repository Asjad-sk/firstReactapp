const todoSchema = require("../model/todo");


exports.createTodo = async (req, res) => {
    const { title, description,completed } = req.body;

    try {
        // Create a new todo using the todoSchema model
        const newTodo = new todoSchema({
            title,
            description,
            completed
        });

        // Save the new todo to the database
        const todo = await newTodo.save();

        // Respond with the created todo
        res.status(201).json(todo);
    } catch (err) {
        console.error(err.message);

        // If it's a validation error (e.g., required fields missing), respond with a 400 status
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }

        // For other types of errors, respond with a 500 status
        res.status(500).send('Server Error');
    }
};






exports.getTodo = async (req, res) => {
    try {
        const createdTodo = await todoSchema.find({});
        res.status(200).json(createdTodo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};




exports.getsingleTodo = async (req, res) => {
    const _id = req.params.id;

    try {
        const singleTodo = await todoSchema.findById(_id);

        if (!singleTodo) {
            return res.status(404).json({ msg: 'Todo not found' });
        }

        res.status(200).json(singleTodo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


exports.updateTodo = async (req, res) => {
    const todoFields = {};
    const { title, description } = req.body;

    if (title) todoFields.title = title;
    if (description) todoFields.description = description;

    try {
        let todo = await todoSchema.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        todo = await todoSchema.findByIdAndUpdate(
            req.params.id,
            { $set: todoFields },
            { new: true }
        );

        res.json(todo);
    } catch (err) {
        console.error(err.message);

        if (err.kind === "ObjectId") {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.status(500).send("Server Error");
    }
};
exports.deleteTodo = async (req, res) => {
    try {
       

        const todo = await todoSchema.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        await todo.deleteOne();
        res.json({ msg: "Todo removed", deletedTodo: todo }); // Send the deleted todo in the response
    } catch (err) {
        console.error(err.message);

        if (err.kind === "ObjectId") {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.status(500).send('Server Error');
    }
};


  