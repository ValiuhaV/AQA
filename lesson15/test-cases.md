Сайт: https://www.yakaboo.ua

Тест-кейс #1: 

*Перевірити, що після пошуку сторінка показує принаймні одну картку результату*

**Передумови:** Відкрито головну сторінку

**Кроки (CSS-selector):**

1. В полі пошуку #search-input вводимо “Україна”

2. Натискаємо кнопку пошуку .ui-search-form-input button.ui-btn-primary

3. У результатах пошуку відображається принаймні одна картка, у назві якої присутнє слово “Україна” - .category-card.expanded .ui-card-title[title*="Україна"]

**Кроки (XPath-selector):**

1. В полі пошуку //input[@id="search-input"] - вводимо “Україна”

2. Натискаємо кнопку пошуку //button[contains(text(),"Пошук")]

3. У результатах пошуку відображається принаймні одна картка, у назві якої присутнє слово “Україна” - //div[contains(@class,"category-card")]//*[contains(text(),"Україна")]



Тест-кейс #2:

*Перевірити, що після кліку на "Купити" книга додається в кошик*

<b>Передумови:</b> Відкрито сторінку результатів пошуку

**Кроки (CSS-selector):**

1. На карточці книги натискаємо кнопку "Купити" - [data-testid="addToCart"]

2. Натискаємо на кнопку кошика в хедері - #site-header button.ui-btn-shopping-cart

3. Перевіряємо, що відкривається сайдбар кошика - [data-testid="microcart"]

4. Перевіряємо, що додана книга відображається в кошику - [data-testid="sidebar"] .checkout-product-card .product-name

**Кроки (XPath-selector):**

1. На карточці книги натискаємо кнопку "Купити" -  //*[@data-testid="addToCart"]

2. Натискаємо на кнопку кошика в хедері - //*[@id="site-header"]//button[contains(@class,"cart")]

3. Перевіряємо, що відкривається сайдбар кошика - //*[@data-testid="microcart"]

4. Перевіряємо, що додана книга відображається в кошику - //*[@data-testid="sidebar"]//*[contains(@class,"checkout-product-card")]//*[contains(@class,"product-name")]
   
