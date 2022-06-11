const {PrismaClient} = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

let renderPageDaftar = (req, res) => {
    res.render('autentikasi/daftar')
}

let renderPageMasuk = (req, res) => {
    res.render('autentikasi/masuk')
}

let handleSignUp = async (req, res) => {
    try {
        let {uname, email, password} = req.body
        const checkIfUserRegistered = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (checkIfUserRegistered) {
            req.flash('error', 'anda sudah terdaftar!')
            res.redirect('/auth/daftar')
        }
        const insertUserToDatabase = await prisma.user.create({
            data: {
                username: uname,
                email: email,
                password: await bcrypt.hash(password, 10)
            }
        })
        if (insertUserToDatabase) {
            res.redirect('/auth/masuk')
        }
    }
    catch (e) {
        console.log(e)
    }

}

module.exports = {renderPageDaftar, renderPageMasuk, handleSignUp}