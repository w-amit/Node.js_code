// const gfName = "MsRandom";
// const gfName2 = "MsRandom2";
// const gfName3 = "MsRandom3";

// one way of exporting 
// module.exports = gfName;

// export default gfName;
// export {gfName2, gfName3};


export const generateLovePercent = () => {
    return `${Math.floor(Math.random() * 100)}%`;
}




// For precision we use Math.floor