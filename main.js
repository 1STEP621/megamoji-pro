window.addEventListener("load", function () {
  const inputEvent = (value) => new Event('input', { bubbles: false, value: value });
  const changeEvent = (value) => new Event('change', { bubbles: true, target: { value: value } });

  const params = new URLSearchParams(location.search);

  async function proc() {
    await sendClick('button[name="職人モード(テキスト)"]');

    await sendClickIf('button[name="文字色"]', undefined, params.get('color') != null);
    await setValueIf('.popover input', undefined, `#${params.get('color')}`, params.get('color') != null);
    await setValue('textarea[name="テキスト"]', undefined, params.get('text')?.replace("\\n", "\n") ?? 'テキ\nスト');
    await setValue('input[name="その他のフォント"]', undefined, params.get('font') ?? "normal 1em 'Mplus1Bold'");
    await sendClickIf('button[name="グラデーション"]', undefined, params.get('gradient') != null);
    if (params.get("outline") != null) {
      const outline = params.get('outline').split(",");
      for (let i = 0; i < outline.length; i++) {
        await sendClick('button[name="アウトライン (追加)"]');
        await sendClick(`button.color[name="アウトライン(色)"]`, i);
        await setValue(`.popover input`, i, `#${outline[i]}`);
      }
    }
    await sendClickIf('button[name="両端揃え"]', undefined, params.get('align') == "justify");
    await sendClickIf('button[name="中央揃え"]', undefined, params.get('align') == "center");
    await sendClickIf('button[name="左揃え"]', undefined, params.get('align') == "left");
    await sendClickIf('button[name="右揃え"]', undefined, params.get('align') == "right");
    await sendClickIf('button[name="サンプル表示"]', undefined, params.get('sample-preview') != null);

    await sendClick('button[name="効果をつける"]');

    await setValue('select[name="切り抜き"]', undefined, params.get('clip') ?? 0);
    await sendClickIf('button[name="背景色(透過)"]', undefined, params.get('transparent') != null);

    await sendClick('button[name="職人モード(効果)"]');

    await sendClickIf('button[name="画像サイズ自動"]', undefined, params.get('size') != null);
    await setValueIf('div:has(button[name="画像サイズ自動"])+div>div>input.number', undefined, params.get('size'), params.get('size') != null);
    if (params.get("outline") != null) {
      effects = params.get('effect').split(",");
      for await (checkbox of Array.from(document.getElementsByClassName("checkbox"))) {
        await new Promise(resolve => {
          if (effects.includes(checkbox.textContent)) {
            checkbox.click();
            setTimeout(() => {
              resolve();
            }, 100);
          } else {
            resolve();
          }
        });
      }
    }

    await sendClick('button[name="効果をつける(戻る)"]');
  }

  proc();

  function waitForElement(selector, nth = null) {
    return new Promise(resolve => {
      if (document.querySelectorAll(selector)) {
        resolve(document.querySelectorAll(selector)[nth ?? 0]);
      } else {
        setTimeout(() => {
          waitForElement(selector);
        }, 100);
      }
    });
  }

  function setValue(selector, nth = null, value) {
    return new Promise(resolve => {
      waitForElement(selector, nth).then(element => {
        element.value = value;
        element.dispatchEvent(inputEvent(value));
        element.dispatchEvent(changeEvent(value));
        setTimeout(() => {
          resolve();
        }, 100);
      });
    });
  };

  function setValueIf(selector, nth = null, value, condition) {
    return new Promise(resolve => {
      if (condition) {
        setValue(selector, nth, value).then(() => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  };

  function sendClick(selector, nth = null) {
    return new Promise(resolve => {
      waitForElement(selector, nth).then(element => {
        element.click();
        setTimeout(() => {
          resolve();
        }, 100);
      });
    });
  };

  function sendClickIf(selector, nth = null, condition) {
    return new Promise(resolve => {
      if (condition) {
        sendClick(selector, nth).then(() => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
});