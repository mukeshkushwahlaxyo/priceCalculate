import fetch from 'node-fetch';

//get total number of users
const getPrice = async (req, res) => {
  try {
    var {currency} = req.params
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=evergrowcoin&vs_currencies=${currency}`,
    {
      // headers: {
        // 'X-CoinAPI-Key': '73034021-THIS-IS-SAMPLE-KEY'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
    })
    .then(res => res.text())
    .then(text => res.send(text));    
  } catch (error) {
    return res.send('Error', 400);
  }
};


const adminController = {
  getPrice,
};

export default adminController;
