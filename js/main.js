const btnDarkMode = document.querySelector(".btn-dark__mode");
const videoElement = document.querySelector('.back-video');
const defaultVideoSrc = videoElement.src; // Store the default video source
if (localStorage.getItem('isDark') === 'dark') {
    videoElement.src = "/home/aswebtech/Downloads/pexels-pressmaster-3130182-3840x2160-30fps.mp4";
    btnDarkMode.classList.toggle("btn-dark__mode--active");
}

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("btn-dark__mode--active");
    const isDark = document.body.classList.toggle('dark');

   

    if (isDark) {
        localStorage.setItem('isDark', 'dark')
        videoElement.src = "/home/aswebtech/Downloads/pexels-pressmaster-3130182-3840x2160-30fps.mp4"; 
    } else {
        localStorage.setItem('isDark', 'light')

        videoElement.src = "/home/aswebtech/Downloads/pexels-pressmaster-3141210-3840x2160-25fps.mp4";
    }

    videoElement.load(); 
    console.log('Button clicked!');
};
