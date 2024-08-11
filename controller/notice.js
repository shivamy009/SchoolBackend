let Notice=require('../model/noticeModel')

exports.createNotice=async(req,res)=>{
    try {
        const notice = new Notice({
            ...req.body,
            school: req.body.adminID
        })
        const result = await notice.save()
        res.send(result)
    } catch (err) {
        res.status(500).json(err);
    }
}
exports.listNotice=async(req,res)=>{
    try {
        let notices = await Notice.find({ school: req.params.id })
        if (notices.length > 0) {
            res.send(notices)
        } else {
            res.send({ message: "No notices found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
exports.updateNotice=async(req,res)=>{
    try {
        const result = await Notice.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true })
        res.send(result)
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.deleteAllnotices=async(req,res)=>{
    try {
        const result = await Notice.deleteMany({ school: req.params.id })
        if (result.deletedCount === 0) {
            res.send({ message: "No notices found to delete" })
        } else {
            res.send(result)
        }
    } catch (error) {
        res.status(500).json(err);
    }
}
exports.deleteNotice=async(req,res)=>{
    try {
        const result = await Notice.findByIdAndDelete(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500).json(err);
    }
}