## Сайт: https://www.yakaboo.ua

##### Тест-кейс #1: 

###### *Перевірити, що після пошуку сторінка показує принаймні одну картку результату*

**Передумови:** Відкрито головну сторінку

**Кроки (CSS-selector):**

1. В полі пошуку #search-input вводимо “Україна”

2. Натискаємо кнопку пошуку #site-header button.ui-btn-primary

3. Очікуємо, що з’являться картки результатів - .category-card.category-layout.expanded

**Кроки (XPath-selector):**

1. В полі пошуку //\*\[@id="search-input"] - вводимо “Україна”

2. Натискаємо кнопку пошуку //button[contains(text(),"Пошук")]

3. Очікуємо, що з’явились картки результатів - //div\[contains(@class,"category-card") and contains(@class,"expanded")]



##### Тест-кейс #2:

###### *Перевірити, що після кліку на "Купити" книга додається в кошик*
git 
<b>Передумови:</b> Відкрито сторінку результатів пошуку

**Кроки (CSS-selector):**

1. На карточці книги натискаємо кнопку button.ui-btn-accent.add-to-cart

2. Натискаємо на кнопку кошика в хедері .ui-btn-shopping-cart\_\_icon

3. Перевіряємо, що додана книга відображається в кошику - .checkout-product-card

**Кроки (XPath-selector):**

1. На карточці книги натискаємо кнопку //button\[contains(@class,"add-to-cart")]
2. Натискаємо на кнопку кошика в хедері //\*\[@id="site-header"]//button\[contains(@class,"cart")]
3. Перевіряємо, що додана книга відображається в кошику - //div\[contains(@class,"checkout-product-card")]
   
