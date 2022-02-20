const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    console.log(req.method);
    switch (req.method) {
        case 'GET': {
            return getSnaps(req, res);
        }

        case 'POST': {
            return addSnap(req, res);
        }

        case 'PUT': {
            return updateSnap(req, res);
        }

        case 'DELETE': {
            return deleteSnap(req, res);
        }

        case 'GETID': {
            return getSnapId(req,res);
        }

        case 'GET_LIMIT': {
            return getSnapsLimit(req,res);
        }
    }
}

async function getSnapId(req,res){
    console.log("here");
    console.log(req);
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        var query = { _id: new ObjectId(req.body) };
        let snaps = await db
            .collection('snaps')
            .find(query)
        // return the snaps
        return res.json({
            message: snaps,
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function getSnapsLimit(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let snaps = await db
            .collection('snaps')
            .find({})
            .limit(4)
            .sort({ published: -1 })
            .toArray();
        // return the snaps
        return res.json({
            message: JSON.parse(JSON.stringify(snaps)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function getSnaps(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let snaps = await db
            .collection('snaps')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the snaps
        return res.json({
            message: JSON.parse(JSON.stringify(snaps)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function addSnap(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('snaps').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Snap added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        console.log(error);
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function updateSnap(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // update the published status of the snap
        await db.collection('snaps').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        // return a message
        return res.json({
            message: 'Snap updated successfully',
            success: true,
        });
    } catch (error) {

        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function deleteSnap(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();

        // Deleting the post
        await db.collection('snaps').deleteOne({
            _id: new ObjectId(req.body),
        });

        // returning a message
        return res.json({
            message: 'Snap deleted successfully',
            success: true,
        });
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}