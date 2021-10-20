import fetch from 'node-fetch';

var fetchData = async (path) => {
    var data = await fetch(path);
    var res = await data.json();
    return res;
};

export {fetchData};