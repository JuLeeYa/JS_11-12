$(function(){
	
	$('.jcarousel').jCarousel({

	});

	var html = $('#page').html();
	
	
	var data = 
	{
		header: "Бурый медведь (Ursus arctos)",
		image: 'src="img/bear2.jpg"',
		title1: 'Название: ',
		content1: 'Бурый медведь, гризли, бурый североамериканский медведь. В Северной Америке известен под названием "гризли" (раньше бурого североамериканского медведя выделяли в отдельный вид).',
		
		title2: 'Ареал: ',
		content2: 'Некогда бурый медведь был обычен по всей Европе, включая Англию и Ирландию, на юге его ареал достигал северо-запада Африки (горы Атласа), а на востоке через Сибирь и Китай доходил до Японии. В Северную Америку он, вероятно, попал около 40 000 лет назад из Азии, через Берингов перешеек, и широко расселился в западной части континента от Аляски и до севера Мексики. ',

		title3: 'Описание:',
		content3: 'Внешний вид этого зверя хорошо известен. Тело у него мощное с высокой холкой (горбом). Этот горб - фактически масса мускулов, которые позволяют бурым медведям легко рыть и использовать их лапы в качестве ударной силы. Голова массивная с небольшими ушами и глазами. Хвост короткий - 65-210 мм, едва выделяющийся из шерсти. Между лбом и переносицей в профиль хорошо заметная впадина. У стоящего зверя холка заметно выше крупа. Лапы сильные пятипалые, стопоходящие. Стопы ног бурого медведя очень широкие, пальцы вооружены длинными мощными, сжатыми с боков и серповидно изогнутыми не втяжными когтями длиной 8-10 см, которые на передних конечностях значительно длиннее, чем на задних.'
	};

	
	var content = tmpl(html, data);


	$('body').append(content);
	


	
});



