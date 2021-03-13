const startAngle = 90;
const numOfItem = 3; 
const angle = 360 / numOfItem;

const c = document.querySelector('.circle');
const line = document.querySelectorAll('.line');

const r = c.offsetWidth / 2;
const rad = angle * Math.PI / 180;
const lineTranslateX = r * Math.cos(rad / 2);
const lineWidth = 2 * r * Math.sin(rad / 2);

for (let i = 0; i <= line.length; i++)
{
  line[i].style.width = `${lineWidth}px`;
  const rotate = (startAngle + angle / 2) + angle * i;
  const rotateItem = (rotate - angle / 2) + angle / 2 * i;
  line[i].style.transform = `translate(-50%, -50%) rotate(${rotate}deg) translateX(${lineTranslateX}px) rotate(${rotateItem}deg)`;
}

