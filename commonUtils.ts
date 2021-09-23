export const timeStampToISOString = (time: number) => {
    return new Date(time).toISOString().split('T')[0];
}

export const timeStampToTime = (time: number) => {
    let date = new Date(time);
    return date.getHours() + ":" + date.getMinutes();
}

export const removeHyphenFromPhone = (phoneNumber: string) => {
    const phoneWithHyphenReg = /^\d{3}-\d{3,4}-\d{4}$/;
    if(phoneWithHyphenReg.test(phoneNumber)){
        return phoneNumber.replace(/\-/g,'');
    }else{
        return phoneNumber;
    }
}
