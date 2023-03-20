exports.status = (values,res) => {
    const data = {
        "status": 200,
        "values": values
    }

    res.status(200).json(values);
    res.end()
}

exports.statusError = (values,res,status) => {
    const data = {
        "status": status,
        "values": values
    }

    res.status(status).json(values);
    res.end()
}

exports.statuslog = (token,res,status) => {
    const data = {
        "status": status,
    }

    res.status(status).json(token);
    res.end()
}
