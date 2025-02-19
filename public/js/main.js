document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect remains unchanged
    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Always animate on scroll: add and remove the "visible" class based on intersection
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);
  
    scrollElements.forEach(element => {
      observer.observe(element);
    });
  });
  
  
  // JavaScript for the "Read More" functionality in About section
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('#about .read-more-btn');
    const aboutText = document.querySelector('#about .about-text');
  
    readMoreBtn.addEventListener('click', function() {
      aboutText.classList.toggle('expanded');
      // Toggle button text
      if (aboutText.classList.contains('expanded')) {
        readMoreBtn.textContent = 'Read Less';
      } else {
        readMoreBtn.textContent = 'Read More';
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    // 选择菜单按钮和手机端菜单
    const menuToggleBtn = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    // 如果元素都存在，给按钮绑定点击事件
    if (menuToggleBtn && mobileMenu) {
      menuToggleBtn.addEventListener('click', () => {
        // 切换菜单的 active 类，从而实现显示/隐藏
        mobileMenu.classList.toggle('active');

        // 如果需要切换汉堡图标变为 X，可以再给按钮本身加一个 class
        menuToggleBtn.classList.toggle('open');
      });
    }

    // 处理子菜单的展开/收起
    const submenuParents = document.querySelectorAll('.mobile-menu li.has-submenu');
    submenuParents.forEach(item => {
      const link = item.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('active');
  });
});
});
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay    = document.querySelector('.menu-overlay');

    // 打开菜单
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
    });

    // 关闭菜单
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });

    // 点击模糊层也可关闭
    overlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

