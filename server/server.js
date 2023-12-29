const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express();

// get all todos

app.get('/tods', async (req, res) => {
    try {
        // await
        
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));