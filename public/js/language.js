     document.addEventListener('DOMContentLoaded', function() {
      // Translation dictionary for English, Spanish, and Chinese
      const translations = {
        en: {
          "nav.home": "Home",
          "nav.about": "About Us",
          "nav.products": "Products",
          "nav.whyus": "Why Us",
          "nav.contact": "Contact Us",
          //================= Index ｜ 首页 =================//
          "hero.title": "Elegance Redefined",
          "hero.subtitle": "Discover our exclusive women's products",
          "hero.button": "Explore Products",
          "products.title": "Products",
          "product.top": "Top",
          "product.dress": "Dress",
          "product.seamless": "Seamless",
          "product.coat": "Coat & Jacket",
          "product.pants": "Bottoms",
          "about.title": "About Us",
          "about.text": "Nantong Joyful Fashion Co., Ltd. is a garment trading & industrial company. The company is located in the famous textile and garment city—Nantong, Jiangsu, China, which is only 1.5 hours drive to Shanghai, the biggest business center in China. In 2021, the company officially moved the head office to Haobang Building, opening a new page in the 20-year history of the company.",
          "about.button": "Read More",
          "advantage.title": "Why Us",
          "advantage.factory": "Our factory",
          "advantage.certificate": "Qualification",
          "advantage.strength": "Our Strengths",
          "contact.title": "Contact",
          "contact.text": "Get in touch with us for collaborations and inquiries.",
          "contact.button": "Contact Us",
          "footer.text": "&copy; Copyright 2025 All Rights Reserved Joyful Fashion 苏ICP备2023052917号",
          //================= About US ｜ 关于我们 ===========//
          "about.pageTitle": "About Us - Your Fashion Collection",
          "about.welcome": "Welcome to Our Story",
          "about.intro": "Discover the passion and creativity that transformed us from humble beginnings to global success.",
          "about.background.title": "Rooted in the Textile City",
          "about.background.text": "Joyful Fashion Co., Ltd. is a modern apparel company integrating trade and industry. Located in Nantong, Jiangsu, China—known as the 'Textile City'—the company benefits from a rich textile heritage and a strategic location just 1.5 hours from Shanghai. In 2021, we moved our headquarters to the iconic Haobang Building, opening a new chapter in our 20-year history.",
          "about.leadership.title": "Innovation and Expertise",
          "about.leadership.text": "Situated in the Haobang Building, a landmark in Nantong, our company thrives under exceptional leadership. Joyful boasts a professional foreign trade team, ensuring seamless communication with clients, and an independent fabric development department that brings innovative, high-end materials to the fashion market.",
          "about.quality.title": "Commitment to Quality",
          "about.quality.text": "At Joyful, quality is at the heart of everything we do. Our design and quality control teams turn creative ideas into high-quality garments that meet global standards. With a dedicated sample center and modern production lines, we ensure efficient sample completion and timely delivery, supporting our clients’ success.",
          "about.production.title": "Strategic Growth",
          "about.production.text": "To meet growing client demand, we operate two garment factories: one in Nantong and another in Lianyungang. These facilities, supported by skilled workers and efficient management, form a robust production network that guarantees quality and on-time delivery.",
          "about.brand.title": "Building Our Brand",
          "about.brand.text": "In 2018, Joyful launched its own women’s fashion brand, Special Staying, blending Italian aesthetics with modern style. Officially introduced in 2020, the brand has earned the trust of confident, stylish women with its 'modern and sophisticated' appeal. We remain dedicated to innovation, quality, and creating value for our clients and society.",
          "about.learnMore": "Learn More",
          //=============== Products ｜ 产品详情 =============//
          "collection.title" : "category",
          "collection.top.title": "Top collection",
          "collection.dress.title": "Dress Collection",
          "collection.seamless.title":"Seamless Collection",
          "collection.coat.title":"Coats and Jackets Collection",
          "collection.pants.title":"Bottoms Collection",
          //=============== Why Us ｜ 选择我们 ==============//
          "advantages.title": "Why Us - Your Fashion Collection",
          "advantages.factory.h2": "OUR FACTORIES",
          "advantages.qualifications.h2": "OUR QUALIFICATIONS",
          "advantages.strengths.h2": "OUR STRENGTHS",
          "advantages.factory1": "Nantong Factory",
          "advantages.factory2": "Lianyungang Factory",
          "advantages.factory3": "Sample Center",
          "advantages.strengths.card1.h3" : "Quality Assurance",
          "advantages.strengths.card1.p": "Our company maintains rigorous quality assurance at every stage. From meticulous raw material inspections to precise cutting, stitching, and finishing, our experienced quality control team ensures that every garment meets high standards for durability, comfort, and style. We continuously refine our processes with state-of-the-art technology to guarantee consistent, premium quality in every piece.",
          "advantages.strengths.card2.h3": "Quick Responsen",
          "advantages.strengths.card2.p": "In the fast-paced world of fashion, speed is crucial. Our agile production process allows us to respond rapidly to your needs:<br>Material sourcing: 1 day<br>Sample making: 1 week<br>Quotation: 1 day<br>Lead time: 1 month.",
          "advantages.strengths.card3.h3": "Sustainable Material",
          "advantages.strengths.card3.p": "We are committed to environmental responsibility by prioritizing sustainable and ethically sourced fabrics. Our partnerships with certified suppliers ensure that every material we use not only meets high quality standards but also minimizes environmental impact. This dedication to green practices supports a healthier planet while meeting the growing consumer demand for eco-friendly fashion.",
          "advantages.strengths.card4.h3": "Design Team",
          "advantages.strengths.card4.p": "Our in-house design team is the creative engine behind our collections. Composed of talented, trend-savvy professionals, they fuse innovative ideas with practical expertise to transform concepts into wearable art. By closely monitoring global fashion trends and incorporating cutting-edge design techniques, they create distinctive, market-leading garments that capture the essence of modern style.",
          "advantages.contactButton": "Contact Us",
           //=============== Contact Us ｜ 联系我们 ==============//
          "contact.h1": "HOW TO CONTACT JOYFUL CLIENT SERVICES",
          "contact.h3": "Choose your preferred method of contact and connect with us",
          "method.phone.title": "PHONE",
          "method.email.title": "EMAIL",
          "method.address.title": "ADDRESS",
          "method.wechat.title": "WECHAT",
          "contact.title": "Contact Us - Your Fashion Collection",
          "method.address.content" : "Nantong Jingsu China"
        },
        es: {
          "nav.home": "Inicio",
          "nav.about": "Sobre Nosotros",
          "nav.products": "Productos",
          "nav.whyus": "Por Qué Nosotros",
          "nav.contact": "Contáctanos",
          //================= Index ｜ 首页 =================//
          "hero.title": "Elegancia Redefinida",
          "hero.subtitle": "Descubre nuestra colección exclusiva para mujeres",
          "hero.button": "Explorar Colección",
          "products.title": "Colección",
          "product.top": "Top",
          "product.dress": "Vestido",
          "product.seamless": "Sin costuras",
          "product.coat": "Abrigos",
          "product.pants": "Pantalones",
          "about.title": "Sobre Nosotros",
          "about.text": "Nantong Joyful Fashion Co., Ltd. es una empresa comercial e industrial de prendas. La compañía está ubicada en la famosa ciudad textil y de confecciones - Nantong, Jiangsu, China, a solo 1.5 horas en coche de Shanghai, el mayor centro de negocios en China. En 2021, la compañía trasladó oficialmente su sede al Haobang Building, abriendo una nueva página en la historia de 20 años de la empresa.",
          "about.button": "Leer Más",
          "advantage.title": "¿Por qué nosotros?",
          "advantage.factory": "Nuestra fábrica",
          "advantage.certificate": "Calificación",
          "advantage.strength": "Nuestras fortalezas",
          "contact.title": "Contacto",
          "contact.text": "Ponte en contacto con nosotros  para colaboraciones y consultas.",
          "contact.button": "Contáctanos",
          "footer.text": "&copy; Copyright 2025 All Rights Reserved Joyful Fashion 苏ICP备2023052917号",
          //================= About US ｜ 关于我们 ===========//
          "about.pageTitle": "Sobre Nosotros - Your Fashion Collection",
          "about.welcome": "Bienvenido a conocer nuestra historia",
          "about.intro": "Descubre la pasión y creatividad que nos llevaron de un inicio modesto a un éxito global.",
          "about.background.title": "Enraizados en la ciudad textil, comenzando un nuevo capítulo",
          "about.background.text": "Nantong Jinyifeng Garments Co., Ltd. es una empresa moderna que combina comercio e industria de la confección. La compañía está ubicada en Nantong, Jiangsu, China, conocida como la 'ciudad textil', con una rica historia en la industria textil y un profundo patrimonio cultural. Su ubicación estratégica, a solo 1,5 horas en coche del principal centro comercial de China, Shanghái, brinda un fuerte apoyo logístico para la expansión del negocio a nivel nacional e internacional. En 2021, la compañía trasladó oficialmente su sede al icónico edificio Haobang, marcando un nuevo capítulo en sus 20 años de desarrollo.",
          "about.leadership.title": "Equipo profesional, innovación en moda",
          "about.leadership.text": "El edificio Haobang, situado en el extremo sur de la Plaza de la Estación de Ferrocarril de Nantong, es un emblema de la ciudad con una ubicación estratégica, vistas amplias y un acceso conveniente. Bajo el liderazgo del equipo de gestión, todo el personal de Jinyifeng mantiene un espíritu de innovación y crecimiento constante, convirtiéndose en un referente destacado en el sector de comercio exterior de Nantong. Contamos con un equipo profesional de comercio exterior que garantiza una comunicación fluida y eficiente con los clientes. Además, hemos establecido un departamento independiente de desarrollo de telas que nos permite acceder a las últimas tendencias globales y desarrollar materiales innovadores para los mercados de moda de gama media y alta.",
          "about.quality.title": "Calidad artesanal, perfección refinada",
          "about.quality.text": "Jinyifeng siempre se ha adherido al principio empresarial de 'la calidad como vida', considerando la calidad del producto como un pilar clave de nuestra competitividad. Guiados por esta filosofía, perfeccionamos constantemente nuestros procesos internos y capacidades profesionales para garantizar que cada producto cumpla con los estándares de excelencia. Los departamentos de diseño, técnica y control de calidad se dedican a transformar las ideas de diseñadores nacionales e internacionales en productos de alta calidad, satisfaciendo las necesidades de las consumidoras. Además, contamos con un centro de muestras independiente que, junto con líneas de producción modernas y trabajadores altamente capacitados, garantiza la finalización eficiente y la entrega puntual de las muestras, ofreciendo gran comodidad para los pedidos de comercio exterior. Desde su fundación, la empresa ha establecido su propia fábrica de confección con más de 100 empleados, abarcando todo el proceso desde almacenamiento, corte, costura, planchado, inspección y embalaje, supervisado por gestores competentes que aseguran un flujo de producción fluido y un control efectivo de la calidad.",
          "about.production.title": "Expansión estratégica, crecimiento sostenido",
          "about.production.text": "Para satisfacer la creciente demanda de pedidos de clientes, la compañía estableció una segunda fábrica de confección en la ciudad de Lianyungang, Jiangsu. Con más de 200 empleados, esta fábrica, aunque se encuentra a 500 kilómetros de la sede, asegura la estabilidad de los procesos de producción y la calidad del producto gracias a un equipo de trabajadores experimentados y un modelo de gestión eficiente. Además, Jinyifeng ha establecido colaboraciones a largo plazo con varias fábricas subcontratadas, construyendo una red de producción eficiente y confiable que respalda sólidamente el desarrollo de sus negocios de comercio exterior. Este enfoque estratégico no solo fortalece nuestra competitividad en el mercado, sino que también refleja la visión de Jinyifeng para una expansión sostenida.",
          "about.brand.title": "Construcción de marca, visión de futuro",
          "about.brand.text": "Durante años, Jinyifeng ha servido a numerosas marcas reconocidas a nivel nacional e internacional, acumulando una rica experiencia y manteniendo un compromiso constante con la calidad premium. En 2018, basándose en su éxito global, la compañía decidió crear su propia marca, Special Staying, una línea de ropa femenina. La marca combina la estética clásica italiana con las aspiraciones culturales contemporáneas y cuenta con equipos especializados de investigación y ventas. Además, ha invitado a diseñadores italianos a colaborar con su equipo local para desarrollar ropa de alta calidad con una perspectiva global. En octubre de 2020, la marca Special Staying se lanzó oficialmente, ganándose la preferencia de mujeres confiadas, elegantes y con estilo gracias a su posicionamiento único y su encanto 'moderno y sofisticado'. Jinyifeng sigue comprometida con su espíritu empresarial de 'unidad, dedicación, innovación y desarrollo', buscando alcanzar sus metas empresariales mientras persigue sus sueños. Creemos firmemente en la integridad y el beneficio mutuo con nuestros clientes, priorizando el bienestar de nuestros empleados y sirviendo a la sociedad para crear un futuro brillante para la marca Special Staying.",
          "about.learnMore": "Saber más",
          //=============== Products ｜ 产品详情 =============//
          "collection.title" : "Categoría",
          "collection.top.title": "Colección de Top",
          "collection.dress.title": "Colección de Vestidos",
          "collection.seamless.title": "Colección Sin Costuras",
          "collection.coat.title": "Colección de Abrigos",
          "collection.pants.title": "Colección de Pantalones",
          //=============== Why Us ｜ 选择我们 ==============//
          "advantages.title": "Por Qué Nosotros - Tu Colección de Moda",
          "advantages.factory.h2": "NUESTRAS FÁBRICAS",
          "advantages.qualifications.h2": "NUESTRAS CALIFICACIONES",
          "advantages.strengths.h2": "NUESTRAS FORTALEZAS",
          "advantages.factory1": "Fábrica de Nantong",
          "advantages.factory2": "Fábrica de Lianyungang",
          "advantages.factory3": "Centro de Muestras",
          "advantages.strengths.card1.h3": "Garantía de Calidad",
          "advantages.strengths.card1.p": "Nuestra empresa mantiene un riguroso control de calidad en cada etapa. Desde inspecciones minuciosas de las materias primas hasta cortes, costuras y acabados precisos, nuestro experimentado equipo de control de calidad garantiza que cada prenda cumpla con altos estándares de durabilidad, comodidad y estilo. Continuamente refinamos nuestros procesos con tecnología de vanguardia para asegurar una calidad premium constante en cada pieza.",
          "advantages.strengths.card2.h3": "Respuesta Rápida",
          "advantages.strengths.card2.p": "En el vertiginoso mundo de la moda, la velocidad es crucial. Nuestro ágil proceso de producción nos permite responder rápidamente a sus necesidades:<br>Abastecimiento de materiales: 1 día<br>Confección de muestras: 1 semana<br>Cotización: 1 día<br>Tiempo de entrega: 1 mes.",
          "advantages.strengths.card3.h3": "Material Sostenible",
          "advantages.strengths.card3.p": "Estamos comprometidos con la responsabilidad ambiental, priorizando telas sostenibles y obtenidas éticamente. Nuestras asociaciones con proveedores certificados aseguran que cada material que utilizamos no solo cumple con altos estándares de calidad, sino que también minimiza el impacto ambiental. Este compromiso con las prácticas ecológicas favorece un planeta más saludable, al mismo tiempo que satisface la creciente demanda de moda ecológica.",
          "advantages.strengths.card4.h3": "Equipo de Diseño",
          "advantages.strengths.card4.p": "Nuestro equipo de diseño interno es el motor creativo detrás de nuestras colecciones. Compuesto por profesionales talentosos y conocedores de las tendencias, fusionan ideas innovadoras con experiencia práctica para transformar conceptos en arte utilizable. Al seguir de cerca las tendencias globales de la moda e incorporar técnicas de diseño de vanguardia, crean prendas distintivas y líderes en el mercado que capturan la esencia del estilo moderno.",
          "advantages.contactButton": "Contáctanos",
           //=============== Contact Us ｜ 联系我们 ==============//
           "contact.h1": "CÓMO CONTACTAR A LOS SERVICIOS AL CLIENTE DE JOYFUL",
           "contact.h3": "Elige tu método preferido para contactarnos y conéctate con nosotros",
           "method.phone.title": "TELÉFONO",
           "method.email.title": "CORREO",
           "method.address.title": "DIRECCIÓN",
           "method.wechat.title": "WECHAT",
           "contact.title": "Contáctanos - Tu Colección de Moda",
           "method.address.content" : "Nantong Jingsu China"
        },
        zh: {
          "nav.home": "首页",
          "nav.about": "关于我们",
          "nav.products": "产品详情",
          "nav.whyus": "选择我们",
          "nav.contact": "联系我们",
          //================= Index ｜ 首页 =================//
          "hero.title": "优雅新定义",
          "hero.subtitle": "探索我们独家女性系列",
          "hero.button": "探索系列",
          "products.title": "产品详情",
          "product.top": "上衣",
          "product.dress": "连衣裙",
          "product.seamless": "无缝系列",
          "product.coat": "外套",
          "product.pants": "下装",
          "about.title": "关于我们",
          "about.text": "南通市锦一丰服饰有限公司是一家服装贸易与工业公司。公司位于中国著名的纺织服装城市——江苏省南通市，距离中国最大的商业中心上海仅1.5小时车程。2021年，公司正式将总部搬迁至豪邦大厦，开启了其20年历史的新篇章。",
          "about.button": "查看更多",
          "advantage.title": "为什么选择我们",
          "advantage.factory": "我们的工厂",
          "advantage.certificate": "资质证明",
          "advantage.strength": "我们的优势",
          "contact.title": "联系我们",
          "contact.text": "联系我们以获取合作与咨询。",
          "contact.button": "联系我们",
          "footer.text": "&copy; Copyright 2025 All Rights Reserved Joyful Fashion 苏ICP备2023052917号",
          //================= About US ｜ 关于我们 ===========//
          "about.pageTitle": "关于我们 - Your Fashion Collection",
          "about.welcome": "欢迎了解我们的故事",
          "about.intro": "探索点燃我们从平凡起步到全球成功旅程的激情与创造力。",
          "about.background.title": "扎根纺织之都，开启崭新篇章",
          "about.background.text": "南通锦一丰服饰有限公司是一家集贸易与工业于一体的现代化服装企业。公司坐落于中国江苏南通，这里被誉为“纺织服装之都”，拥有悠久的纺织产业历史和深厚的文化底蕴。地理位置优越，公司距离中国最大的商业中心上海仅1.5小时车程，辐射全国乃至国际市场的交通便利性为业务拓展提供了强大支撑。2021年，公司正式将总部迁至南通标志性建筑——豪邦大厦，这一举措不仅彰显了锦一丰对未来发展的雄心壮志，也翻开了公司20年发展历程的新篇章。",
          "about.leadership.title": "专业团队，时尚创新",
          "about.leadership.text": "豪邦大厦坐落于南通铁路站广场南端，作为城市名片，它交通便利、视野开阔，为公司提供了优越的办公环境和发展平台。在管理团队的卓越领导下，锦一丰全体员工秉持锐意进取的精神，不断创新、稳步成长，公司如今已成为南通外贸行业的翘楚。公司拥有一支专业的外贸人才队伍，确保与客户之间实现无障碍、高效率的沟通。同时，公司设立了独立的面料开发部门，能够第一时间获取全球最新的面料趋势，专注于开发适合中高端时尚市场的创新面料，以确保客户始终站在潮流前沿。",
          "about.quality.title": "匠心品质，精益求精",
          "about.quality.text": "锦一丰始终坚持“质量为生命”的企业宗旨，将产品质量视为核心竞争力的关键所在。在这一理念的引领下，公司通过不断完善内部流程和提升专业能力，确保每一件产品都能达到卓越的品质标准。制版、工艺和品控部门致力于将国内外设计师的创意转化为高质量的成品，精准契合女性消费者的穿着需求。公司还设有独立的样品中心，通过现代化的生产线和技术精湛的工人，确保样品能够高效完成并及时交付，为客户的外贸订单提供了极大便利。此外，公司自成立以来便设立了自有服装工厂，目前拥有100多名员工，覆盖仓储、裁剪、缝纫、熨烫、检验和包装的全流程，每个环节都由称职的管理人员监督，确保生产顺畅、品质优良。",
          "about.production.title": "跨区域布局，稳步扩张",
          "about.production.text": "为满足日益增长的客户订单需求，公司在江苏连云港市建立了第二家服装厂。该工厂员工规模超过200人，尽管距离总部500公里，却凭借充足的熟练工团队和高效的管理模式，确保生产流程的稳定性和产品质量的可控性。锦一丰还与多家分包工厂建立长期合作关系，共同构筑高效、可靠的生产网络，为企业的外贸业务发展提供了坚实保障。这样的战略布局不仅让公司拥有更强的市场竞争力，也体现了锦一丰在不断扩张中的远见卓识。",
          "about.brand.title": "品牌建设，未来展望",
          "about.brand.text": "多年来，锦一丰服务于众多国内外知名品牌，积累了丰富的经验，并始终秉持高端品质的理念。2018年，在服务全球市场的基础上，公司决定打造属于自己的品牌——Special Staying 女装。品牌专注于将经典意大利美学与现代文化追求相结合，成立了专门的研发和销售团队，并邀请意大利设计师与本地设计团队深度合作，共同打造具有国际视野的精品女装。2020年10月，Special Staying 品牌正式亮相，以“时尚、优雅”的品牌定位赢得了有内涵、有气质、自信女性的青睐。锦一丰始终以“团结、奉献、创新、发展”的企业精神为指引，在追逐梦想的同时实现企业价值。我们坚信，对客户，我们坚持诚信共赢；对员工，我们践行以人为本；对社会，我们致力于启迪和服务大众。未来，锦一丰将继续为全球客户提供高品质的产品和服务，推动Special Staying 品牌成长为高端女装领域的标杆，开创属于自己的时尚传奇。",
          "about.learnMore": "了解更多",
          //=============== Products ｜ 产品详情 =============//
          "collection.title" : "类别",
          "collection.top.title": "上衣系列",
          "collection.dress.title":"连衣裙系列",
          "collection.seamless.title":"无缝系列",
          "collection.coat.title":"外套系列",
          "collection.pants.title":"裤装系列",
          //=============== Why Us ｜ 选择我们 ==============//
          "advantages.title": "为什么选择我们 - 你的时尚系列",
          "advantages.factory.h2": "我们的工厂",
          "advantages.qualifications.h2": "我们的资质",
          "advantages.strengths.h2": "我们的优势",
          "advantages.factory1": "南通蓝波工厂",
          "advantages.factory2": "连云港蓝波工厂",
          "advantages.factory3": "样品中心",
          "advantages.strengths.card1.h3": "质量保证",
          "advantages.strengths.card1.p": "我们公司在每个环节都严格把控质量。从精细的原材料检测到精准的裁剪、缝制和整理，我们经验丰富的质量控制团队确保每件服装都符合耐用性、舒适性和时尚性的高标准。我们不断通过最先进的技术优化流程，确保每件产品始终保持一致的优质品质。",
          "advantages.strengths.card2.h3": "快速响应",
          "advantages.strengths.card2.p": "在快节奏的时尚领域，速度至关重要。我们的敏捷生产流程使我们能够迅速响应您的需求：<br>原材料采购：1天<br>样品制作：1周<br>报价：1天<br>交货周期：1个月",
          "advantages.strengths.card3.h3": "可持续材料",
          "advantages.strengths.card3.p": "我们致力于环保责任，优先选用可持续且符合道德标准的面料。与认证供应商的合作确保我们使用的每一种材料不仅达到高质量标准，还能最大限度地减少对环境的影响。这种对绿色实践的坚持既支持了更健康的地球，也满足了消费者对环保时尚不断增长的需求。",
          "advantages.strengths.card4.h3": "设计团队",
          "advantages.strengths.card4.p": "我们的内部设计团队是系列产品的创意引擎。由才华横溢且紧跟潮流的专业人士组成，他们将创新理念与实践经验相结合，将概念转化为可穿戴的艺术。通过密切关注全球时尚趋势并采用尖端设计技术，他们打造出独特且引领市场的服装，捕捉现代风格的精髓。",
          "advantages.contactButton": "联系我们",
          //=============== Contact Us ｜ 联系我们 ==============//
          "contact.h1": "如何联系我们",
          "contact.h3": "选择你喜欢的联系方式，与我们取得联系",
          "method.phone.title": "电话",
          "method.email.title": "电子邮件",
          "method.address.title": "地址",
          "method.wechat.title": "微信",
          "contact.title": "联系我们",
          "method.address.content" : "中国江苏南通"
        }
      };

      // Mapping for language names (for the button text)
      const languageNames = {
        en: "English",
        es: "Español",
        zh: "中文"
      };

      const flagIcons = {
        en: "https://flagcdn.com/24x18/gb.png",
        es: "https://flagcdn.com/24x18/es.png",
        zh: "https://flagcdn.com/24x18/cn.png"
      };

      // Check if a language is stored in localStorage, otherwise default to English
      let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

      function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
          }
        });
        // Update the language button flag and text
        document.querySelector('.lang-btn img').src = flagIcons[lang];
        document.querySelector('.lang-btn .lang-text').innerText = languageNames[lang];

        // Update the video link based on language.
        // For Chinese ("zh"), change the video src to the desired Chinese version URL.
        const videoIframe = document.getElementById('about-video-iframe');
        if (videoIframe) {
          if (lang === 'zh') {
            videoIframe.src = "https://v.qq.com/txp/iframe/player.html?vid=w3532rbgoua"; // Replace with your Chinese video URL
          } else {
            videoIframe.src = "https://www.youtube.com/embed/ZJrPG9CiVN8?si=aq94yPxoCFhoNukY";
          }
        }
      }
      
      // Set the language on page load
      updateLanguage(currentLanguage);
      
      // Toggle dropdown display
      const langBtn = document.querySelector('.lang-btn');
      const langDropdown = document.querySelector('.lang-dropdown');
      
      langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.style.display = (langDropdown.style.display === 'block') ? 'none' : 'block';
      });
      
      // Hide dropdown when clicking outside
      document.addEventListener('click', function() {
        langDropdown.style.display = 'none';
      });
      
      // Update language when an option is selected and store it in localStorage
      langDropdown.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', function(e) {
          e.preventDefault();
          const lang = this.getAttribute('data-lang');
          currentLanguage = lang;
          updateLanguage(lang);
          localStorage.setItem('selectedLanguage', lang);
        });
      });
    });