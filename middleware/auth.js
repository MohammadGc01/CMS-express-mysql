async function authentication(req , res,) {
    if(req.session & req.session.user){
        return next()
    }
    res.status(401).json({ message: 'Unauthorized. Please log in to access this resource.' });
}


async function authorization(req) {
    if(!req.session & !req.session.user){
     return  res.status(401).json({ message: 'Unauthorized. Please log in to access this resource.' });
    }

    const user = req.session.user;
    return user
}
module.exports = {
    authentication,
    authorization
}