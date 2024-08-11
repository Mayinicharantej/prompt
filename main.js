function generateQRCode() {
        const url = document.getElementById('urlInput').value;
        const qrcodeContainer = document.getElementById('qrcode');
        
        // Clear any existing QR code
        qrcodeContainer.innerHTML = '';
        
        if (url) {
            // Create QR code using jQuery QR Code plugin
            $(qrcodeContainer).qrcode({
                text: url,
                width: 128,
                height: 128
            });
        } else {
            alert('Please enter a URL.');
        }
    }
    