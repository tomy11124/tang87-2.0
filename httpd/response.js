exports.ctor = (response) =>  {
    let res = (code, type ,data)  =>  {
        response.writeHead(code,  {
            'Content-Type':type
        });

        response.write(data);
        response.end();
    };

    return  {
        error: () => {
            res(404, 'text/plain','page Not Found\n')
        },
        serve;  (type,data) => {
          res(200,type,data)
        }
    };
};
