/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
for(var i=0;i<array.length;i++)
{
fn(array[i],i,array);
}
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
var result=[];
for(var i=0;i<array.length;i++)
{
result[i]=fn(array[i],i,array);
}
return result;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
var current;var prev;
if (!initial){prev=array[0];

for(var i=1;i<array.length;i++)
{
current=fn(prev,array[i],i,array);
prev=current;
}
} 
else {prev=initial;
for(var i=0;i<array.length;i++)
{
current=fn(prev,array[i],i,array);
prev=current;
}
}

return current;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
if( prop in obj){
delete obj[prop]; return true;
} else return false;

}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
if (prop in obj){
return true;} 
else return false;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
var props=[];
for( var key in obj)
{
props.push(key);
}
return props;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
var props=[];var nameProp;
for( var key in obj)
{
nameProp=key.toUpperCase();
props.push(nameProp);
}
return props;

}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
var result=[];
if(arguments.length == 1){return array;}
if(!to){to=(array.length);};
try
	{ 
			if(to>=0)
			{      
					if(from >= 0){  
						   if (from > to){throw new Error();};
						   for (var i=from;i<to;i++)
						   {result.push(array[i]);}
						   return result;} 
					else {//from <0
							if ((array.length+from) > to){throw new Error();};
							for (var i=array.length+from;i<to;i++)
							{result.push(array[i]);}
							return result;
						  }
			}

			else 
			{
					if(from >= 0) 
					{
							 if(from > (array.length+to)){throw new Error();};
							 for (var i=from;i<array.length+to;i++)
							  {result.push(array[i]);}
							  return result;
					} 
					else 
					{
							if((arr.length+from) > (arr.length+to)){throw new Error();};
							for (var i=(arr.length+from);i<arr.length+to;i++)
							{
								result.push(arr[i]);}
								
								return result;
						
					}
			}
	}
catch(e){console.log("Введите корректные значения");}
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
