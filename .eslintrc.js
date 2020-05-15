// https://eslint.org/docs/user-guide/configuring

module.exports = {

  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,

  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parser: 'babel-eslint',

  //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    // 设置 script(默认) 或 module，如果代码是在ECMASCRIPT中的模块
    sourceType: 'module',
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },

  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "amd": true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  extends: 'vue',
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  plugins: [
    'html',
    "flow-vars", 
    "react"
  ],
  /* 
   下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
    主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
    "off" -> 0 关闭规则
    "warn" -> 1 开启警告规则
    "error" -> 2 开启错误规则
  */
  rules: {
    // 定义对象的set存取器属性时，强制定义get  
    "accessor-pairs": 2,  
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格  
    "array-bracket-spacing": [2, "never"],  
    // 在块级作用域外访问块内定义的变量是否报错提示  
    "block-scoped-var": 0,  
    // if while function 后面的{必须与if在同一行，java风格。  
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],  
    // 双峰驼命名格式  
    "camelcase": 2,  
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，  
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号  
    "comma-dangle": [2, "never"],  
    // 控制逗号前后的空格  
    "comma-spacing": [2, { "before": false, "after": true }],  
    // 控制逗号在行尾出现还是在行首出现  
    // http://eslint.org/docs/rules/comma-style  
    "comma-style": [2, "last"],  
    // 圈复杂度  
    "complexity": [2,9],  
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always  
    "computed-property-spacing": [2,"never"],  
    // 强制方法必须返回值，TypeScript强类型，不配置  
    "consistent-return": 0,  
    // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了  
    // e.g [0,"that"] 指定只能 var that = this. that不能指向其他任何值，this也不能赋值给that以外的其他值  
    "consistent-this": 0,  
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示  
    "constructor-super": 0,  
    // if else while for do后面的代码块是否需要{ }包围，参数：  
    //    multi  只有块中有多行语句时才需要{ }包围  
    //    multi-line  只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，  
    //                   块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();  
    //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面  
    //    [2, "multi", "consistent"] 保持前后语句的{ }一致  
    //    default: [2, "all"] 全都需要{ }包围  
    "curly": [2, "all"],  
    // switch语句强制default分支，也可添加 // no default 注释取消此次警告  
    "default-case": 2,  
    // 强制object.key 中 . 的位置，参数:  
    //      property，'.'号应与属性在同一行  
    //      object, '.' 号应与对象名在同一行  
    "dot-location": [2, "property"],  
    // 强制使用.号取属性  
    //    参数： allowKeywords：true 使用保留字做属性名时，只能使用.方式取属性  
    //                          false 使用保留字做属性名时, 只能使用[]方式取属性 e.g [2, {"allowKeywords": false}]  
    //           allowPattern:  当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}]  
    "dot-notation": [2, {"allowKeywords": true}],  
    // 文件末尾强制换行  
    "eol-last": 2,  
    // 使用 === 替代 ==  
    "eqeqeq": [2, "allow-null"],  
    // 方法表达式是否需要命名  
    "func-names": 0,  
    // 方法定义风格，参数：  
    //    declaration: 强制使用方法声明的方式，function f(){} e.g [2, "declaration"]  
    //    expression：强制使用方法表达式的方式，var f = function() {}  e.g [2, "expression"]  
    //    allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, "declaration", { "allowArrowFunctions": true }]  
    "func-style": 0,  
    "generator-star-spacing": [2, { "before": true, "after": true }],  
    "guard-for-in": 0,  
    "handle-callback-err": [2, "^(err|error)$" ],  
    "indent": [2, 2, { "SwitchCase": 1 }],  
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],  
    "linebreak-style": 0,  
    "lines-around-comment": 0,  
    "max-nested-callbacks": 0,  
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],  
    "new-parens": 2,  
    "newline-after-var": 0,  
    "no-alert": 0,  
    "no-array-constructor": 2,  
    "no-caller": 2,  
    "no-catch-shadow": 0,  
    "no-cond-assign": 2,  
    "no-console": 0,  
    "no-constant-condition": 0,  
    "no-continue": 0,  
    "no-control-regex": 2,  
    "no-debugger": 2,  
    "no-delete-var": 2,  
    "no-div-regex": 0,  
    "no-dupe-args": 2,  
    "no-dupe-keys": 2,  
    "no-duplicate-case": 2,  
    "no-else-return": 0,  
    "no-empty": 0,  
    "no-empty-character-class": 2,  
    "no-empty-label": 2,  
    "no-eq-null": 0,  
    "no-eval": 2,  
    "no-ex-assign": 2,  
    "no-extend-native": 2,  
    "no-extra-bind": 2,  
    "no-extra-boolean-cast": 2,  
    "no-extra-parens": 0,  
    "no-extra-semi": 0,  
    "no-fallthrough": 2,  
    "no-floating-decimal": 2,  
    "no-func-assign": 2,  
    "no-implied-eval": 2,  
    "no-inline-comments": 0,  
    "no-inner-declarations": [2, "functions"],  
    "no-invalid-regexp": 2,  
    "no-irregular-whitespace": 2,  
    "no-iterator": 2,  
    "no-label-var": 2,  
    "no-labels": 2,  
    "no-lone-blocks": 2,  
    "no-lonely-if": 0,  
    "no-loop-func": 0,  
    "no-mixed-requires": 0,  
    "no-mixed-spaces-and-tabs": 2,  
    "no-multi-spaces": 2,  
    "no-multi-str": 2,  
    "no-multiple-empty-lines": [2, { "max": 1 }],  
    "no-native-reassign": 2,  
    "no-negated-in-lhs": 2,  
    "no-nested-ternary": 0,  
    "no-new": 2,  
    "no-new-func": 0,  
    "no-new-object": 2,  
    "no-new-require": 2,  
    "no-new-wrappers": 2,  
    "no-obj-calls": 2,  
    "no-octal": 2,  
    "no-octal-escape": 2,  
    "no-param-reassign": 0,  
    "no-path-concat": 0,  
    "no-process-env": 0,  
    "no-process-exit": 0,  
    "no-proto": 0,  
    "no-redeclare": 2,  
    "no-regex-spaces": 2,  
    "no-restricted-modules": 0,  
    "no-return-assign": 2,  
    "no-script-url": 0,  
    "no-self-compare": 2,  
    "no-sequences": 2,  
    "no-shadow": 0,  
    "no-shadow-restricted-names": 2,  
    "no-spaced-func": 2,  
    "no-sparse-arrays": 2,  
    "no-sync": 0,  
    "no-ternary": 0,  
    "no-this-before-super": 2,  
    "no-throw-literal": 2,  
    "no-trailing-spaces": 2,  
    "no-undef": 2,  
    "no-undef-init": 2,  
    "no-undefined": 0,  
    "no-underscore-dangle": 0,  
    "no-unexpected-multiline": 2,  
    "no-unneeded-ternary": 2,  
    "no-unreachable": 2,  
    "no-unused-expressions": 0,  
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],  
    "no-use-before-define": 0,  
    "no-var": 0,  
    "no-void": 0,  
    "no-warning-comments": 0,  
    "no-with": 2,  
    "object-curly-spacing": 0,  
    "object-shorthand": 0,  
    "one-var": [2, { "initialized": "never" }],  
    "operator-assignment": 0,  
    "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],  
    "padded-blocks": 0,  
    "prefer-const": 0,  
    "quote-props": 0,  
    "quotes": [2, "single", "avoid-escape"],  
    "radix": 2,  
    "semi": [2, "never"],  
    "semi-spacing": 0,  
    "sort-vars": 0,  
    "space-after-keywords": [2, "always"],  
    "space-before-blocks": [2, "always"],  
    "space-before-function-paren": [2, "always"],  
    "space-in-parens": [2, "never"],  
    "space-infix-ops": 2,  
    "space-return-throw-case": 2,  
    "space-unary-ops": [2, { "words": true, "nonwords": false }],  
    "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"] }],  
    "strict": 0,  
    "use-isnan": 2,  
    "valid-jsdoc": 0,  
    "valid-typeof": 2,  
    "vars-on-top": 0,  
    "wrap-iife": [2, "any"],  
    "wrap-regex": 0,  
    "yoda": [2, "never"],
    // 不需要
    "space-before-function-paren": 2,  // 函数定义时括号前面要不要有空格
    "eol-last": 0,  // 文件以单一的换行符结束
    "no-extra-semi": 0, // 可以多余的冒号
    "semi": 0,  // 语句可以不需要分号结尾
    "eqeqeq": 0, // 必须使用全等
    "one-var": 0, // 连续声明
    "no-undef": 0, // 可以 有未定义的变量

    // 警告
    "no-extra-boolean-cast": 1, // 不必要的bool转换
    "no-extra-parens": 1, // 非必要的括号
    "no-empty": 1, // 块语句中的内容不能为空
    "no-use-before-define": [1, "nofunc"], // 未定义前不能使用
    "complexity": [1, 10], // 循环复杂度
    "no-unused-vars": 1, // 不能有声明后未被使用的变量或参数
    // vue
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,

    // react
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,

    // 错误
    "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
    "no-debugger": 2, // 禁止使用debugger
    "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    "no-dupe-args": 2, // 函数参数不能重复
    "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-empty-character-class": 2, // 正则表达式中的[]内容不能为空
    "no-invalid-regexp": 2, // 禁止无效的正则表达式
    "no-func-assign": 2, // 禁止重复的函数声明
    "valid-typeof": 2,  // 必须使用合法的typeof的值
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-unexpected-multiline": 2, // 避免多行表达式
    "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
    "no-shadow-restricted-names": 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
    "no-native-reassign": 2, // 不能重写native对象

    // 代码风格
    "no-else-return": 1, // 如果if语句里面有return,后面不能跟else语句
    "no-multi-spaces": 1, // 不能用多余的空格
    "key-spacing": [1, {  // 对象字面量中冒号的前后空格
      "beforeColon": false,
      "afterColon": true
    }],
    "block-scoped-var": 2, // 块语句中使用var
    "consistent-return": 2, // return 后面是否允许省略
    "accessor-pairs": 2, // 在对象中使用getter/setter
    "dot-location": [2, "property"], // 对象访问符的位置，换行的时候在行首还是行尾
    "no-lone-blocks": 2, // 禁止不必要的嵌套块
    "no-labels": 2, // 禁止标签声明
    "no-extend-native": 2, // 禁止扩展native对象
    "no-floating-decimal": 2, // 禁止省略浮点数中的0 .5 3.
    "no-loop-func": 2, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-new-func": 2,  // 禁止使用new Function
    "no-self-compare": 2, // 不能比较自身
    "no-sequences": 2, // 禁止使用逗号运算符
    "no-throw-literal": 2, // 禁止抛出字面量错误 throw "error";
    "no-return-assign": [2, "always"], // return 语句中不能有赋值表达式
    "no-redeclare": [2, {   // 禁止重复声明变量
      "builtinGlobals": true
    }],
    "no-unused-expressions": [2, {  // 禁止无用的表达式
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "no-useless-call": 2, // 禁止不必要的call和apply
    "no-useless-concat": 2,
    "no-void": 2, // 禁用void操作符
    "no-with": 2, // 禁用with
    "space-infix-ops": 2, // 中缀操作符周围要不要有空格
    "valid-jsdoc": [2, { // jsdoc规则
      "requireParamDescription": true,
      "requireReturnDescription": true
    }],
    "no-warning-comments": [2, {  // 不能有警告备注
      "terms": ["todo", "fixme", "any other term"],
      "location": "anywhere"
    }],
    "curly": 1, // 必须使用 if(){} 中的{}

    // common js
    "no-duplicate-imports": 1
  }
}