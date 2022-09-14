const Student = require('../models/Student.model.js')
const Group = require('../models/Group.model.js')

module.exports.studentController = {
    addStudent: async (req, res) => {
        const { name, status, payment, } = req.body
        try {
            await Student.create({
                name,
                status,
                payment,
            })
            res.json('Студент добавлен')
        } catch (error) {
            res.json(error.message)
        }
    },
    addStudentGroup: async (req, res) => {

        const group = await Group.findById(req.params.groupid)
        try {
            if (!group.students.includes(req.params.studentid) && group.endStudy === false) {
                await Student.findByIdAndUpdate(req.params.studentid, { group: req.params.groupid })
                await Group.findByIdAndUpdate(req.params.groupid, {
                    $push: { students: req.params.studentid }
                })
                res.json('Студент добавлен в группу')
            }
            else {
                res.json('Студент уже есть в группе')
            }
        } catch (error) {
            res.json(error.message)
        }
    },

    getStudents: async (req, res) => {
        try {
            const students = await Student.find().populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },

    getStudentsByGroupId: async (req, res) => {
        try {
            const students = await Student.find({ group: req.params.id }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },

    getStudentsFullPay: async (req, res) => {
        try {
            const students = await Student.find({ payment: "full" }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsDidntPay: async (req, res) => {
        try {
            const students = await Student.find({ payment: "didntpay" }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsHalfPay: async (req, res) => {
        try {
            const students = await Student.find({ payment: "half" }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsStudy: async (req, res) => {
        try {
            const students = await Student.find({ status: "study" }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsSearchJob: async (req, res) => {
        try {
            const students = await Student.find({ status: "searchJob" }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsGotAnOffer: async (req, res) => {
        try {
            const students = await Student.find({ status: "gotAnOffer" }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsWentToWork: async (req, res) => {
        try {
            const students = await Student.find({ status: "wentToWork" }).populate('group')
            res.json(students)
        } catch (error) {
            res.json(error.message)
        }
    },
    getGotAnOffer: async (req, res) => {
        try {
            const group = await Group.findById(req.params.groupid).populate('students')
            let i = 0
            for (const ar of group.students) {
                if (ar.status === "gotAnOffer") {
                    i++
                }
            }
            const result = (i * 100) / group.students.length
            res.json(Math.round(result))
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteStudent: async (req, res) => {
        try {
            await Student.findByIdAndRemove(req.params.id)
            res.json('Студент удален!')
        } catch (error) {
            res.json(error.message)
        }
    },

    updateStudent: async (req, res) => {
        const { name, status, payment, } = req.body
        try {
            await Student.findByIdAndUpdate(req.params.id, {
                name,
                status,
                payment,
            })
            res.json('Изменения сохранены')
        } catch (error) {
            res.json(error.message)
        }
    },
}
