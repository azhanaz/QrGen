document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const qrCodeImage = document.getElementById('qrCodeImage');
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    submitBtn.addEventListener('click', function () {
        const googleLink = document.getElementById('googleLink').value;
        const qr = new QRious({
            value: googleLink,
            size: 200,
            element: qrCodeImage,
            foreground: '#006DAE',
        });

        qrCodeContainer.style.display = 'block';
    });
});
