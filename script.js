// ============================================
// ФУНКЦИИ ДЛЯ МОБИЛЬНОГО МЕНЮ
// ============================================

// Получаем элементы меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Переключение мобильного меню
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Анимация кнопки-бургера
        hamburger.classList.toggle('active');
    });
}

// Закрытие меню при клике на пункт меню
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// ПЛАВНАЯ ПРОКРУТКА
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// АНИМАЦИЯ ПРИ ПОЯВЛЕНИИ ЭЛЕМЕНТОВ
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Добавляем анимацию к карточкам при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .blog-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// ============================================
// ЗАГРУЗКА Instagram ПОСТОВ
// ============================================

// РЕДАКТИРОВАТЬ: Замените YOUR_ACCESS_TOKEN на ваш token от Instagram Graph API
const INSTAGRAM_USERNAME = 'ddepqwee';
const INSTAGRAM_ACCESS_TOKEN = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Добавьте ваш token здесь

// Функция для загрузки Instagram постов через Instagram Graph API
async function loadInstagramPosts() {
    const igGrid = document.getElementById('instagram-grid');
    
    try {
        // ПРИМЕЧАНИЕ: Instagram Graph API требует authentication
        // Для простого решения используем встроенный Instagram embed
        // Для полной функциональности создайте собственный backend для получения posts
        
        // Пример с использованием встроенной галереи
        loadInstagramGallery();
        
    } catch (error) {
        console.error('Ошибка при загрузке Instagram постов:', error);
        igGrid.innerHTML = '<p>Ошибка при загрузке постов. Посетите мой <a href="https://www.instagram.com/ddepqwee/" target="_blank">Instagram профиль</a></p>';
    }
}

// Альтернативная функция: загрузка примера постов
function loadInstagramGallery() {
    const igGrid = document.getElementById('instagram-grid');
    
    // Пример данных постов (РЕДАКТИРОВАТЬ: замените на реальные данные)
    const samplePosts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            link: 'https://www.instagram.com/ddepqwee/'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            link: 'https://www.instagram.com/ddepqwee/'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            link: 'https://www.instagram.com/ddepqwee/'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            link: 'https://www.instagram.com/ddepqwee/'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1560264357-8d9766c72ba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            link: 'https://www.instagram.com/ddepqwee/'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            link: 'https://www.instagram.com/ddepqwee/'
        }
    ];
    
    // Очищаем spinner
    igGrid.innerHTML = '';
    
    // Добавляем посты в сетку
    samplePosts.forEach((post, index) => {
        const postElement = document.createElement('a');
        postElement.href = post.link;
        postElement.target = '_blank';
        postElement.className = 'instagram-post';
        postElement.style.animationDelay = `${index * 0.1}s`;
        
        const img = document.createElement('img');
        img.src = post.image;
        img.alt = `Instagram пост ${post.id}`;
        img.loading = 'lazy';
        
        postElement.appendChild(img);
        igGrid.appendChild(postElement);
    });
}

// ============================================
// ОБРАБОТКА ФОРМЫ КОНТАКТОВ
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Получаем значения формы
        const name = contactForm.querySelector('input[placeholder="Ваше имя"]').value;
        const email = contactForm.querySelector('input[placeholder="Ваш email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Тема"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Валидация
        if (!name || !email || !message) {
            alert('Пожалуйста, заполните обязательные поля');
            return;
        }
        
        // РЕДАКТИРОВАТЬ: Замените на ваше решение для отправки email
        // Вариант 1: Использование Formspree (https://formspree.io)
        // Вариант 2: Использование собственного backend
        // Вариант 3: Использование сервиса EmailJS
        
        // Пример с Formspree:
        const formData = new FormData(contactForm);
        
        // Для демонстрации показываем сообщение
        showNotification('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.', 'success');
        
        // Очищаем форму
        contactForm.reset();
        
        // ПРИМЕЧАНИЕ: Для отправки реального email, раскомментируйте и настройте:
        // fetch('https://formspree.io/f/YOUR_FORM_ID', {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // })
        // .then(response => {
        //     if (response.ok) {
        //         showNotification('Сообщение отправлено успешно!', 'success');
        //         contactForm.reset();
        //     }
        // })
        // .catch(error => {
        //     console.error('Ошибка:', error);
        //     showNotification('Произошла ошибка. Попробуйте позже.', 'error');
        // });
    });
}

// Функция для показания уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 5 секунд
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Портфель загружен успешно!');
    
    // Загружаем Instagram посты
    loadInstagramPosts();
    
    // Показываем версию API
    console.log('Instagram API: Используется встроенный embed');
    
    // РЕДАКТИРОВАТЬ: Добавьте аналитику (например, Google Analytics)
    // window.dataLayer = window.dataLayer || [];
    // gtag('event', 'page_view', {
    //     'page_title': 'Portfolio - ddepqwee',
    //     'page_path': '/'
    // });
});

// ============================================
// ДОПОЛНИТЕЛЬНЫЕ УТИЛИТЫ
// ============================================

// Отслеживание активного пункта меню при прокрутке
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Дополнительная анимация при наведении на элементы
document.querySelectorAll('.service-card, .blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
});

// ============================================
// КЭШИРОВАНИЕ И ОПТИМИЗАЦИЯ
// ============================================

// Ленивая загрузка изображений
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('🎨 Скрипт полностью загружен и готов к работе!');
