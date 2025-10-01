// AOS Init
AOS.init();

// Hero Slider
let slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(()=>{
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
},4000);

// WhatsApp Form
document.getElementById("wa-form").addEventListener("submit", function(e){
  e.preventDefault();
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;
  let nomor = "6285236402121"; // Nomor tujuan
  let text = `Halo, Saya ${nama} (${email}).%0A${pesan}`;
  let url = `https://wa.me/${nomor}?text=${text}`;
  window.open(url, '_blank');
});

// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
