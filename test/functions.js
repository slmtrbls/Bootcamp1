const functions = {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUSer: () => {
        const user = {firstname: 'Brad'};
        user['lastname'] = 'Mitchell';
        return user;
    }
}

module.exports = functions;