const discountYes = document.getElementById('discountYes');
const discountDetails = document.getElementById('discountDetails');
const discountInfo = document.getElementById('discountInfo');

discountYes.addEventListener('change', function() {
    if (this.checked) {
        discountDetails.style.display = 'block';
        discountInfo.setAttribute('required', true);
    } else {
        discountDetails.style.display = 'none';
        discountInfo.removeAttribute('required');
    }
});

document.getElementById('brandForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const brandName = document.getElementById('brandName').value;
    const brandDomain = document.getElementById('brandDomain').value;
    const productName = document.getElementById('productName').value;
    const discount = document.querySelector('input[name="discount"]:checked').value;
    const discountDetails = discount === 'yes' ? document.getElementById('discountInfo').value : 'no discount';

    const marketingPost = `Create an Marketing Caption in 200 words for ${brandName} brand which specializes in ${brandDomain} for one of their products ${productName} which has a sale of ${discountDetails} going on`;

    document.getElementById('marketingPost').innerText = marketingPost;
    document.getElementById('marketingPost').style.display = 'block';
});