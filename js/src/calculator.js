const calc = (price = 100) => {
  const calcBlock = document.getElementById('calc'),
    calcType = document.getElementById('calc-type'),
    calcTypeMaterial = document.getElementById('calc-type-material'),
    calcSquare = document.getElementById('calc-input'),
    totalValue = document.getElementById('calc-total');

  const countSum = () => {
    let total = 0;      

    const typeValue = +calcType.options[calcType.selectedIndex].value,
      typeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value,
      squareValue = +calcSquare.value;    

    if (typeValue && squareValue && typeMaterialValue) {

      total = price * typeValue * squareValue * typeMaterialValue;
      totalValue.value = total;
      localStorage.setItem('calcTotalValue' ,total);
    }

  };

  calcBlock.addEventListener('change', event => {
    const target = event.target;

    if (target.matches('#calc-type') ||
      target.matches('#calc-input') ||
      target.matches('#calc-type-material')) {
        countSum();
    }
  });
};

export default calc;
