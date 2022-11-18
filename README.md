# moss (WIP)
Most optional style sheet

## Example syntax
```css
style StyleA
{
    backgroundColor : #FFFFFFFF;
}

style StyleB
{
    textColor : #FFFFFFFF;
}

style StyleC : StyleA, StyleB
{
    textColor : #0000FFFF;
}

transform transformA
{
    position : (50%, 48rem, 0);
    rotation : 45d;
    scale : (100% ,30px);
}

animation animationA
{
    0%
    {
        position : (*, *, *);
    }
    100%
    {
        position : (+10%, *, *);
    }
}

.div
{
    transform : transformA
    {
        /**
         [EN]
         'super' object has inherited value or default value => Meaning to use inherited value as it is
         If you substitute only super objects, it fits the properties of the values
         You can also import values for a particular object
         
        
         [KR]
         'super'객체는 상속받은 값 또는 기본값을 가지고있음 => 상속값을 그대로 사용하겠다는뜻
         super 객체로만 대입하면 값의 속성에 맞춰 들어감
         특정 객체의 값을 불러오기도 가능
         **/
        position : (transformA.position.x - 10%, super, super.position.y);
        rotation : 0d;
        scale : (50% ,*);
    }
    style : StyleA, StyleB
    {
        /**
         [EN]
         If you have properties that overlap with an inheritance object
         , Overwrite with child properties
         
         Follow left (front) property values if inherited styles have overlapping properties
        
        
         [KR]
         상속 스타일과 같은 속성이 있는경우
         여기의 속성으로 오버라이딩

         상속받은 스타일끼리 중복되는 속성이 있을경우 왼쪽(앞쪽) 속성값을 따름
         **/
    }
    animation(3s) : animationA

    hover
    {
        // Mouse Hover style, 마우스 호버 스타일
        transform
        {}
        style
        {}
    }

    .div_child // Sub-style inherits parent style by default, 하위 스타일은 기본적으로 부모 스타일 상속
    {
        transform
        {}
        style
        {}
    }
}
```
