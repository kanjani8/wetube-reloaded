export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
   return res.send(`Watch Video #${req.params.id}`);
}
export const edit = (req, res) => {
    console.log(req.params);
    return res.send("edit");
}

export const search = (req, res) => {
    console.log(req.params);
    return res.send("Search");
}

export const deleteVideo = (req, res) => res.send("DeleteVideo");
export const upload = (req, res) => {
    console.log(req.params);
    return res.send("Upload");
}
