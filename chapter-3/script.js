const url = 'http://localhost:63342/test/index.html?em=world&ew=book';

url.split('?')[1].split('&')
    .reduce((result, entry) => {
        const [ key, value ] = entry.split('=');
        result[key] = value;

        return result;
        },
    {});
