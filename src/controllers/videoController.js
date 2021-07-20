export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");

export const search = (req, res) => {
    console.log(req.params);
    return res.send("Search");
}

export const deleteVideo = (req, res) => res.send("DeleteVideo");
export const upload = (req, res) => {
    console.log(req.params);
    return res.send("Upload");
}
