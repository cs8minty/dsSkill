maxPt = 567;
nowPt = 567;

skills = {};

var levels = [
0	,
0	,
0	,
2	,
3	,
4	,
5	,
6	,
7	,
8	,
9	,
10	,
11	,
12	,
13	,
14	,
15	,
16	,
17	,
18	,
19	,
20	,
21	,
22	,
23	,
24	,
25	,
26	,
27	,
28	,
29	,
30	,
31	,
32	,
33	,
34	,
35	,
36	,
37	,
38	,
39	,
41	,
43	,
45	,
47	,
49	,
51	,
54	,
57	,
60	,
63	,
67	,
71	,
76	,
81	,
87	,
93	,
101	,
113	,
125	,
137	,
157	,
177	,
197	,
217	,
237	,
257	,
297	,
367	,
467	,
567	,

];

pts = {
	"워리어":0,
	"메이지":0,
	"레인저":0,
	"클레릭":0,
	"버서커":0,
	"위자드":0,
	"어쌔신":0,
	"하이프리스트":0,
	"드레드노트":0,
	"워록":0,
	"캐논블레이저":0,
	"워프리스트":0,

}

skills["퍼스트 에이드"] = {
	type:	"",
	dec:	"스스로 상처를 치료합니다. 최대 생명력의 35%만큼 자신의 생명력을 회복합니다.",
	img:	"http://cfile22.uf.tistory.com/image/254E9637519D0E300D3020",
	pt:		0,
	need:	0,
}

skills["페이탈 스트라이크"] = {
	type:	"",
	dec:	"전방의 적을 무기로 깊게 찌릅니다. 공격력의 400%만큼 피해를 줍니다.<br/>단축키를 연타하면 후속 공격 돌려 찌르기가 발동합니다. 공격력의 320%만큼 피해를 줍니다",
	img:	"http://cfile21.uf.tistory.com/image/243F023B519D0E3010EE06",
	pt:		0,
	need:	0,
	job:	"",
	move:	true,
}

skills["장검 베기"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 장검을 휘둘러 적을 공격합니다. 공격력의 93%만큼 피해를 주고, 정신력을 30만큼 회복합니다",
	img:	"http://cfile1.uf.tistory.com/image/234F9437519D0E300C1FA9",
	pt:		0,
	need:	0,
	job:	"",
}

skills["구르기"] = {
	type:	"",
	dec:	"바라보고 있는 방향으로 굴러서 빠르게 이동합니다.",
	img:	"http://cfile27.uf.tistory.com/image/264DAC37519D0E2F0DC7B6",
	pt:		0,
	need:	0,
	job:	"",
}


skills["서클 슬래쉬"] = {
	type:	"",
	dec:	"무기를 크게 휘둘러 주위의 모든 적을 벤다. 공격력의 200%만큼 피해를 줌. 단축키를 연타하면 후속 공격 지면 강타가 발동. 공격력의 200%만큼 피해를 주고, 보스를 제외한 적을 30%확률로 기절시킴.",
	img:	"http://cfile28.uf.tistory.com/image/254C0337519D0E2F1257F6",
	pt:		2,
	need:	0,
	job:	"워리어",
	move:	true,
}

skills["장검 베기 강화1"] = {
	type:	"",
	dec:	"기본 공격시 10% 확률로 절단 형태의 이단 베기 공격이 발동합니다. 공격력의 50%만큼 추가 피해를 줍니다.",
	img:	"http://cfile21.uf.tistory.com/image/214DFC37519D0E2F0DD4EA",
	pt:		2,
	need:	0,
	job:	"워리어",
}

skills["기합 베기"] = {
	type:	"",
	dec:	"대시 직후 기본공격을 사용하면 기합 베기가 발동됩니다. 전방의 적을 크게 베어 공격력의 300%만큼 피해를 줍니다.",
	img:	"http://cfile4.uf.tistory.com/image/264D7A37519D0E2F0FDE03",
	pt:		2,
	need:	0,
	job:	"워리어",
	move:	true,
}

skills["매서운 검기"] = {
	type:	"",
	dec:	"서클 슬래쉬의 재사용 시간이 4초 감소합니다. <br/>서클 슬래쉬가 적에게 명중하면 소형의 적 1명당 20, 중형의 적 1명당 10의 정신력을 회복합니다",
	img:	"http://cfile29.uf.tistory.com/image/01198135519D0E2917EAE0",
	pt:		2,
	need:	0,
	job:	"워리어",
	move:	true,
}

skills["용기의 함성"] = {
	type:	"",
	dec:	"서클 슬래쉬 사용 후 단축키를 연타하면 30%의 확률로 지면 강타 대신 용기의 함성이 발동됩니다.<br/>크게 고함을 질러 주위의 적에게 공격력의 500%만큼 피해를 주고, 보스를 제외한 적을 70% 확률로 기절시킵니다. 소형의 적 1명당 30, 중형의 적 1명당 50, 대형과 보스 1명당 200만큼 정신력을 회복합니다.<br/>서클 슬래쉬와 후속 공격 사용 중 넉백 저항이 2만큼 증가합니다(적의 공격에 밀려났을 때 밀려나는 거리와 경직 시간이 줄어듭니다).",
	img:	"http://cfile25.uf.tistory.com/image/254F8837519D0E2D0CBAC8",
	pt:		2,
	need:	0,
	job:	"워리어",
	move:	true,
}

skills["쉴드 크러쉬"] = {
	type:	"",
	dec:	"방패로 적을 타격. 공격력의 100%만큼 피해를 주고, 보스를 제외한 적을 100% 확률로 기절시킴",
	img:	"http://cfile24.uf.tistory.com/image/2619EE35519D0E2B13A57E",
	pt:		2,
	need:	8,
	job:	"워리어",
}

skills["장검 베기 강화2"] = {
	type:	"",
	dec:	"이단베기(장검 베기 강화1) 또는 급소 찌르기(장검 베기 강화 3)가 명중할 때마다 공격력의 10%만큼 생명력을 회복",
	img:	"http://cfile28.uf.tistory.com/image/242AA639519D0E2C1648F6",
	pt:		2,
	need:	8,
	job:	"워리어",
}

skills["칼바람"] = {
	type:	"",
	dec:	"서클 슬래쉬 스킬을 사용하면 절단 형태의 회오리가 3개 발생. 회오리는 직진하면서 적에게 공격력 100%만큼 피해를 줌.",
	img:	"http://cfile3.uf.tistory.com/image/211ACC35519D0E2B1401FA",
	pt:		2,
	need:	8,
	job:	"워리어",
	move:	true,
}

skills["신체 적응"] = {
	type:	"",
	dec:	"물약 종류 아이템의 재사용 시간을 1초 단축함",
	img:	"http://cfile27.uf.tistory.com/image/021B3035519D0E2B167B37",
	pt:		2,
	need:	8,
	job:	"워리어",
	move:	true,
}

skills["돌풍 찌르기"] = {
	type:	"",
	dec:	"돌려 찌르기(페이탈 스트라이크) 발동 후 단축키를 연타하면 후속 공격 돌풍 찌르기가 발동. 돌풍 찌르기는 적을 2회 공격하며 각각 공격력의 600%, 200%만큼 피해를 줌.",
	img:	"http://cfile28.uf.tistory.com/image/021B9635519D0E2B14EF58",
	pt:		2,
	need:	8,
	job:	"워리어",
	move:	true,
}

skills["허리케인"] = {
	type:	"",
	dec:	"고속으로 몸을 회전시켜 돌풍을 만들어 냄. 주위의 적을 끌어당기고, 공격력의 400%만큼 피해를 줌. 이 스킬을 사용하는 동안 무적상태가 됨.",
	img:	"http://cfile10.uf.tistory.com/image/031AC635519D0E29150F1F",
	pt:		2,
	need:	16,
	job:	"워리어",
	move:	true,
}

skills["장검 베기 강화3"] = {
	type:	"",
	dec:	"기본 공격시 10%확률로 절단 형태의 급소 찌르기 공격이 발동. 공격력의 100%만큼 추가 피해",
	img:	"http://cfile25.uf.tistory.com/image/032AA139519D0E2C17F296",
	pt:		2,
	need:	16,
	job:	"워리어",
}

skills["방패 충격"] = {
	type:	"",
	dec:	"실드 크러쉬가 보스도 기절시킬 수 있게 됨.",
	img:	"http://cfile26.uf.tistory.com/image/21292539519D0E2C17ADD6",
	pt:		2,
	need:	16,
	job:	"워리어",
	move:	true,
}

skills["승리의 일격"] = {
	type:	"",
	dec:	"돌풍 찌르기의 두 번째 공격이 대형의 적과 보스에게 명중하면 공격력의 15%만큼 생명력을 회복하고 정신력을 150만큼 회복.",
	img:	"http://cfile4.uf.tistory.com/image/022AAC39519D0E2D17E1EF",
	pt:		2,
	need:	16,
	job:	"워리어",
	move:	true,
}

skills["진공의 검"] = {
	type:	"",
	dec:	"회오리(→칼바람,→연쇄 폭풍)가 발생할 때 3개의 회오리가 추가로 발생.",
	img:	"http://cfile30.uf.tistory.com/image/024E9E37519D0E2D0D8FC9",
	pt:		2,
	need:	16,
	job:	"워리어",
	move:	true,
}

skills["폭풍 베기"] = {
	type:	"",
	dec:	"허리케인 사용 후 단축키를 연타하면 후속 공격 폭풍 베기가 발동된다. 폭풍 베기는 주위의 적에게 공격력의 1000%만큼 피해를 주고 넉백효과를 발생시킴.",
	img:	"http://cfile8.uf.tistory.com/image/241C2C35519D0E29115249",
	pt:		4,
	need:	24,
	job:	"워리어",
	move:	true,
}

skills["용사의 근성"] = {
	type:	"",
	dec:	"적에게 피해를 입을 때마다 정신력을 10만큼 회복.",
	img:	"http://cfile7.uf.tistory.com/image/012A5F39519D0E2C16B3F2",
	pt:		4,
	need:	24,
	job:	"워리어",
	move:	true,
}

skills["신체 단련"] = {
	type:	"",
	dec:	"적의 절단 형태 공격으로 입는 피해가 10%감소",
	img:	"http://cfile21.uf.tistory.com/image/242A7539519D0E2C17A4FB",
	pt:		2,
	need:	24,
	job:	"워리어",
	move:	true,
}

skills["연쇄 폭풍"] = {
	type:	"",
	dec:	"폭풍 베기가 발동하면 절단 형태의 회오리가 3개 발생. 회오리는 직진하면서 적에게 공격력의 100%만큼 피해를 줌.",
	img:	"http://cfile3.uf.tistory.com/image/02285B39519D0E2D1984D6",
	pt:		3,
	need:	24,
	job:	"워리어",
	move:	true,
}

skills["강인한 육체"] = {
	type:	"",
	dec:	"최대 생명력이 500증가.",
	img:	"http://cfile30.uf.tistory.com/image/0118B635519D0E2B14F3D5",
	pt:		5,
	need:	24,
	job:	"워리어",
	move:	true,
}

skills["용맹한 전사"] = {
	type:	"",
	dec:	"허리케인의 재사용시간이 15초 감소. 페이탈 스트라이크의 재사용시간이 2초 감소. 지면강타(→서클슬래쉬)과 용기의 함성(→서클 슬래쉬)이 대형의 적과 보스에게 명중하면 정신력을 600만큼 회복",
	img:	"http://cfile24.uf.tistory.com/image/271B4035519D0E2912C0AE",
	pt:		5,
	need:	32,
	job:	"워리어",
	move:	true,
}

skills["최후의 반격"] = {
	type:	"",
	dec:	"폭풍베기 사용 후 단축키를 연타하면 후속 공격 최후의 반격이 발동. 주위의 적을 3회 연속으로 베어 공격력 300%만큼 피해를 주고, 마지막 일격으로 공격력 800%만큼 피해를 줌. 사용중에 무적 상태가 됨",
	img:	"http://cfile3.uf.tistory.com/image/2719F935519D0E2815C0C0",
	pt:		5,
	need:	32,
	job:	"워리어",
	move:	true,
}

// 메이지

skills["매지컬 큐어"] = {
	type:	"",
	dec:	"스스로 상처를 치료하여 최대 생명력의 35% 만큼 자신의 생명력을 회복한다",
	img:	"http://cfile3.uf.tistory.com/image/22203333519D0BB20C221F",
	pt:		0,
	need:	0,
	job:	"메이지",
}

skills["프로즌 블라스트"] = {
	type:	"",
	dec:	"메이지의 주변에 냉기 돌풍을 일으켜 공격력의 400%만큼 냉기 속성 피해를 주고 30%의 확률로 빙결시키며, 넉백 효과를 준다",
	img:	"http://cfile26.uf.tistory.com/image/03454B36519D0BB50B6CE8",
	pt:		0,
	need:	0,
	job:	"메이지",
	move:	true,
}

skills["연쇄 번개"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 전이되는 연쇄 번개를 발사하여 최대 적 2명을 동시에 공격한다. 공격력의 83%만큼 전기 속성 피해를 주고, 정신력을 30만큼 회복한다. 연쇄 번개가 한 번 전이될 때 마다 적에게 주는 피해가 공격력의 7%만큼 감소한다.",
	img:	"http://cfile22.uf.tistory.com/image/22453D36519D0BB40D95F5",
	pt:		0,
	need:	0,
	job:	"메이지",
}

skills["순간이동"] = {
	type:	"",
	dec:	"메이지의 대시 스킬로, 바라보고 있는 방향으로 빠르게 움직인다.",
	img:	"http://cfile10.uf.tistory.com/image/211FFE33519D0BB30C8D7A",
	pt:		0,
	need:	0,
	job:	"메이지",
}

skills["라이트닝 클라우드"] = {
	type:	"",
	dec:	"4초간 지속되는 방전 지대를 생성한다. 방전 지대 위의 적에게 0.5초마다 공격력의 20%만큼 전기 속성 피해를 주고 5%의 확률로 감전시킨다",
	img:	"http://cfile22.uf.tistory.com/image/2455A038519D0BB1175803",
	pt:		1,
	need:	0,
	job:	"메이지",
	move:	true,
}

skills["연쇄 번개 강화1"] = {
	type:	"",
	dec:	"연쇄 번개의 전이 대상 1명 증가",
	img:	"http://cfile3.uf.tistory.com/image/0220D433519D0BB30ABA5B",
	pt:		2,
	need:	0,
	job:	"메이지",
}

skills["싸늘한 한기"] = {
	type:	"",
	dec:	"프로즌 블라스트가 소형의 적에게 가하는 최종 피해가 1.2배로 증가. 명중한 적 1명당 정신력을 30만큼 회복하며, 20%의 확률로 더 강한 넉백 효과 발생",
	img:	"http://cfile24.uf.tistory.com/image/2420C933519D0BB30B9247",
	pt:		2,
	need:	0,
	job:	"메이지",
	move:	true,
}

skills["얼음 쐐기"] = {
	type:	"",
	dec:	"프로즌 블라스트, 래스 오브 스피릿(->워록)의 단축키를 연타하면 후속 공격으로 얼음 쐐기 발동. 지면에 얼음 쐐기를 일으켜 적에게 공격력의 200%만큼 냉기 피해를 주고 20%의 확률로 빙결시킨다. 얼음 쐐기가 대형, 또는 보스에게 명중하면 정신력을 350만큼 회복한다.",
	img:	"http://cfile4.uf.tistory.com/image/2420DB33519D0BB30B0121",
	pt:		3,
	need:	0,
	job:	"메이지",
	move:	true,
}

skills["전격 마법 전문화"] = {
	type:	"",
	dec:	"전기 속성 공격이 적에게 명중하면 5%의 확률로 전기 폭발이 일어나 공격력의 100%만큼 추가 전기 속성 피해를 준다.",
	img:	"http://cfile6.uf.tistory.com/image/0144EC36519D0BB40DA37A",
	pt:		2,
	need:	0,
	job:	"메이지",
	move:	true,
}

skills["파이어 볼"] = {
	type:	"",
	dec:	"불타는 화염구를 발사하여 공격력의 250%만큼 화염속성 피해를 주며 5%의 확률로 발화시킨다.",
	img:	"http://cfile6.uf.tistory.com/image/21455636519D0BB50D5BB3",
	pt:		2,
	need:	8,
	job:	"메이지",
	move:	true,
}

skills["연쇄 번개 강화2"] = {
	type:	"",
	dec:	"연쇄 번개가 중형의 적에게 10%의 추가 피해를 준다.",
	img:	"http://cfile5.uf.tistory.com/image/2320E633519D0BB30B60E6",
	pt:		2,
	need:	8,
	job:	"메이지",
}

skills["불타는 대지"] = {
	type:	"",
	dec:	"파이어 볼이나 그레네이드 샷(→ 캐논 블레이저)이 명중하면 10%의 확률로 화염지대 생성. 화염 지대는 4초간 지속되며. 0.5초마다 공격력의 50%만큼 화염 피해를 주고, 5%의 확률로 발화를 유발한다.",
	img:	"http://cfile10.uf.tistory.com/image/2620C233519D0BB20BB1C3",
	pt:		3,
	need:	8,
	job:	"메이지",
	move:	true,
}

skills["기회 포착"] = {
	type:	"",
	dec:	"라이트닝 클라우드 범위 안의 적을 연쇄 번개로 공격하면 낙뢰가 떨어져 공격력의 50%만큼 추가 피해를 주고, 1%의 확률로 감전시킨다",
	img:	"http://cfile4.uf.tistory.com/image/23537F38519D0BB017DBF8",
	pt:		3,
	need:	8,
	job:	"메이지",
	move:	true,
}

skills["라이트닝"] = {
	type:	"",
	dec:	"번개를 떨어뜨려 가까운 적부터 공격한다. 최대 5명의 적에게 공격력의 1600%만큼 전기 속성 피해를 주고 감전시킨다. 이 스킬을 사용하는 동안은 무적 상태가 된다.",
	img:	"http://cfile21.uf.tistory.com/image/2354E738519D0BB116C5A3",
	pt:		2,
	need:	16,
	job:	"메이지",
	move:	true,
}

skills["연쇄 번개 강화3"] = {
	type:	"",
	dec:	"연쇄 번개가 대형의 적에게 명중하면 정신력을 10만큼 추가 회복한다",
	img:	"http://cfile25.uf.tistory.com/image/2720ED33519D0BB30BC07B",
	pt:		3,
	need:	16,
	job:	"메이지",
}

skills["전류 방전"] = {
	type:	"",
	dec:	"라이트닝 클라우드 스킬의 지속시간이 2초 증가한다.",
	img:	"http://cfile26.uf.tistory.com/image/01452736519D0BB40D9C00",
	pt:		2,
	need:	16,
	job:	"메이지",
	move:	true,
}

skills["주문 연계"] = {
	type:	"",
	dec:	"연쇄 번개, 섀도우 스트라이크(→ 미스틱) 스킬의 전이 대상이 1명 증가한다.",
	img:	"http://cfile5.uf.tistory.com/image/23434136519D0BB40ED6EB",
	pt:		3,
	need:	16,
	job:	"메이지",
	move:	true,
}

skills["번개를 부르는 자"] = {
	type:	"",
	dec:	"라이트닝 사용 후 2초간 연쇄 번개의 전이 대상이 5명 증가한다",
	img:	"http://cfile10.uf.tistory.com/image/211F8633519D0BB20CBE89",
	pt:		2,
	need:	24,
	job:	"메이지",
	move:	true,
}

skills["뇌신의 가호"] = {
	type:	"",
	dec:	"모든 전기 속성 공격에 의한 피해를 10% 감소시킨다",
	img:	"http://cfile5.uf.tistory.com/image/27542F38519D0BB015B70D",
	pt:		3,
	need:	24,
	job:	"메이지",
	move:	true,
}

skills["마력 방패"] = {
	type:	"",
	dec:	"6미터 이상 떨어진 적에게 피해를 입을 경우 20%의 확률로 마력 방패가 발동한다. 마력 방패는 4초간 지속되며 소형과 중형의 적으로부터 입는 피해를 20% 감소시킨다.",
	img:	"http://cfile2.uf.tistory.com/image/27557638519D0BB11449B7",
	pt:		3,
	need:	24,
	job:	"메이지",
	move:	true,
}

skills["깨우친 자"] = {
	type:	"",
	dec:	"최대 정신력이 250만큼 증가한다.",
	img:	"http://cfile23.uf.tistory.com/image/2756C238519D0BB0163581",
	pt:		2,
	need:	24,
	job:	"메이지",
	move:	true,
}

skills["마력의 수호"] = {
	type:	"",
	dec:	"기절, 수면, 감전, 족쇄 상태가 되면 마력 방패가 자동으로 발동된다. 4초간 지속되며 소형과 중형의 적으로부터 입는 피해를 20% 감소시킨다.",
	img:	"http://cfile23.uf.tistory.com/image/24556E38519D0BB2165EC2",
	pt:		4,
	need:	24,
	job:	"메이지",
	move:	true,
}

skills["총명한 마법사"] = {
	type:	"",
	dec:	"라이트닝 클라우드가 소형, 중형의 적에게 명중할 때마다 정신력을 6, 대형의 적과 보스에게 명중할 때마다 정신력을 50만큼 회복한다.",
	img:	"http://cfile28.uf.tistory.com/image/21439436519D0BB40EB27B",
	pt:		5,
	need:	32,
	job:	"메이지",
}

skills["대폭발"] = {
	type:	"",
	dec:	"라이트닝을 사용할 때 단축키를 누른 채 유지하면 힘을 모을 수 있고 즉시 시전으로 대폭발을, 1초 이상 힘을 모으면 더 큰 위력의 라이트닝이 발동 된다.즉시시전: 주변의 모든 적에게 공격력의 1600%만큼 피해를 준다. 모으기 1단계: 주변의 5명의 적에게 공격력의 2000%만큼 전기 피해를 주고 감전시킨다.",
	img:	"http://cfile7.uf.tistory.com/image/22558B38519D0BB116C7F3",
	pt:		5,
	need:	32,
	job:	"메이지",
}

// 레인저

skills["서바이벌 테크닉"] = {
	type:	"",
	dec:	"스스로의 상처를 치료한다. 최대 생명력의 35%만큼 자신의 생명력을 회복할 수 있다.",
	img:	"http://cfile7.uf.tistory.com/image/01225A33519D11E110B6BF",
	pt:		0,
	need:	0,
	job:	"레인저",
}

skills["발리 샷"] = {
	type:	"",
	dec:	"전방 부채꼴 범위에 5발의 화살을 동시에 발사하여 공격력의 125%만큼 피해를 준다.",
	img:	"http://cfile8.uf.tistory.com/image/22224E33519D11E10F0C83",
	pt:		0,
	need:	0,
	job:	"레인저",
	move:	true,
}

skills["석궁 발사"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 화살을 쏘아 적을 공격한다. 공격력의 100%만큼 피해를 주고, 명중한 적 1명마다 정신력을 20만큼 회복한다.",
	img:	"http://cfile9.uf.tistory.com/image/2446A536519D11E5139FAB",
	pt:		0,
	need:	0,
	job:	"레인저",
}

skills["순간도약"] = {
	type:	"",
	dec:	"레인저의 대시 스킬. 바라보고 있는 방향으로 빠르게 이동한다.",
	img:	"http://cfile4.uf.tistory.com/image/22464736519D11E4137836",
	pt:		0,
	need:	0,
	job:	"레인저",
}

skills["하이 점프"] = {
	type:	"",
	dec:	"전방으로 크게 도약한다. 적을 뛰어넘어 8미터를 이동할 수 있다.",
	img:	"http://cfile28.uf.tistory.com/image/01225633519D11E210B188",
	pt:		1,
	need:	0,
	job:	"레인저",
	move:	true,
}

skills["석궁 발사 강화1"] = {
	type:	"",
	dec:	"기본 공격시 10%의 확률로 2회 사격하여 각각 공격력의 70%만큼 피해를 준다. 발리 샷이 대형의 적과 보스에게 주는 최종 피해가 1.4배가 된다.",
	img:	"http://cfile22.uf.tistory.com/image/23465636519D11E5139D13",
	pt:		2,
	need:	0,
	job:	"레인저",
	move:	true,
}

skills["눈부신 연사"] = {
	type:	"",
	dec:	"발리 샷 또는 무빙 샷 사용 시, 20% 확률로 화살을 2연사하여 공격력의 50%만큼 추가피해, 연속 사용시 화살을 2연사 하여 공격력의 50%만큼 추가피해를 준다.",
	img:	"http://cfile28.uf.tistory.com/image/2155B538519D11E31CA554",
	pt:		2,
	need:	0,
	job:	"레인저",
	move:	true,
}

skills["벼락 덫"] = {
	type:	"",
	dec:	"하이점프를 사용 시, 이동경로에 덫을 매설하며 적이 밟거나 일정시간 지나면 동작하여 덫 위의 대상에게 공격력의 200%만큼 피해를 준다. 덫 공격이 명중하면 명중한 적 1명당 정신력을 50만큼 회복한다.",
	img:	"http://cfile23.uf.tistory.com/image/22227933519D11E110082F",
	pt:		2,
	need:	0,
	job:	"레인저",
	move:	true,
}

skills["사냥 개시"] = {
	type:	"",
	dec:	"적을 죽인 경우, 정신력을 5만큼 회복한다.",
	img:	"http://cfile3.uf.tistory.com/image/234D5E37519D11E51371C9",
	pt:		3,
	need:	0,
	job:	"레인저",
	move:	true,
}

skills["무빙 샷"] = {
	type:	"",
	dec:	"뒤로 빠르게 후퇴하며 화살을 발사한다. 최대 3명에게 공격력의 100%만큼 피해를 준다.",
	img:	"http://cfile26.uf.tistory.com/image/22225E33519D11E11091DA",
	pt:		2,
	need:	8,
	job:	"레인저",
	move:	true,
}

skills["석궁 발사 강화2"] = {
	type:	"",
	dec:	"기본 공격시 10% 확률로 5발을 넓은 범위에 발사한다. 5명의 적에게 공격력의 100%만큼 피해를 준다.",
	img:	"http://cfile23.uf.tistory.com/image/26466836519D11E5131320",
	pt:		2,
	need:	8,
	job:	"레인저",
	move:	true,
}

skills["기습 침투"] = {
	type:	"",
	dec:	"발리 샷 사용 직후 하이 점프를 사용하면 기습침투가 발동. 땅속으로 이동한 뒤 적의 배후에서 솟아나 최대 5명의 적에게 2회 화살 공격을 하여 250%만큼 피해를 준다. 공격이 명중하면 정신력이 300 회복 된다.",
	img:	"http://cfile28.uf.tistory.com/image/02224A33519D11E20FA523",
	pt:		2,
	need:	8,
	job:	"레인저",
	move:	true,
}

skills["집단살상"] = {
	type:	"",
	dec:	"발리 샷과 무빙 샷 사용 시 발사하는 화살의 수가 2개 증가한다.",
	img:	"http://cfile2.uf.tistory.com/image/014C2937519D11E5143DF5",
	pt:		2,
	need:	8,
	job:	"레인저",
	move:	true,
}

skills["도약술 수련"] = {
	type:	"",
	dec:	"하이 점프 사용 중에 넉백 저항이 2만큼 증가한다.(넉백 시 거리와 경직 시간이 줄어듬.)",
	img:	"http://cfile29.uf.tistory.com/image/01540738519D11E322DCDE",
	pt:		2,
	need:	8,
	job:	"레인저",
	move:	true,
}

skills["애로우 레인"] = {
	type:	"",
	dec:	"하늘로 수많은 화살을 쏘아 전방의 넓은 구역을 공격한다. 8개의 지점에 각각 공격력의 300%만큼 피해를 준다. 공격이 명중하면 정신력이 500 회복 된다.",
	img:	"http://cfile24.uf.tistory.com/image/02226A33519D11E1102D98",
	pt:		2,
	need:	16,
	job:	"레인저",
	move:	true,
}

skills["석궁 발사 강화3"] = {
	type:	"",
	dec:	"기본 공격이 명중하면 정신력을 5만큼 추가로 회복.",
	img:	"http://cfile23.uf.tistory.com/image/26466836519D11E5131320",
	pt:		2,
	need:	16,
	job:	"레인저",
	move:	true,
}

skills["확인사살"] = {
	type:	"",
	dec:	"하이 점프 사용 후 0.6초 내에 발리 샷이나 무빙 샷을 사용하면 공격력의 50%만큼 추가 피해를 준다.",
	img:	"http://cfile29.uf.tistory.com/image/02557638519D11E31AF32F",
	pt:		2,
	need:	16,
	job:	"레인저",
	move:	true,
}

skills["죽창 덫"] = {
	type:	"",
	dec:	"기습 침투를 사용하면 이동경로에 죽창으로 만든 덫을 매설한다. 덫은 4초 동안 동작하며, 덫 위의 적에게 0.5초마다 공격력의 50%만큼 피해를 준다.",
	img:	"http://cfile1.uf.tistory.com/image/25228D33519D11E2102C60",
	pt:		2,
	need:	16,
	job:	"레인저",
	move:	true,
}

skills["마름쇠 뿌리기"] = {
	type:	"",
	dec:	"기교 형태 공격이 명중할 때마다 보스를 제외한 적을 1% 확률로 족쇄 상태로 만든다.",
	img:	"http://cfile21.uf.tistory.com/image/2245EE36519D11E413CFD6",
	pt:		2,
	need:	16,
	job:	"레인저",
	move:	true,
}

skills["사냥꾼의 끈기"] = {
	type:	"",
	dec:	"명력이 최대치일 때, 공격 스킬의 최종 피해가 1.1배가 된다.",
	img:	"http://cfile25.uf.tistory.com/image/25226233519D11E2108439",
	pt:		4,
	need:	24,
	job:	"레인저",
	move:	true,
}

skills["민첩한 몸놀림"] = {
	type:	"",
	dec:	"하이 점프,샌드스톰(->블레이드댄서) 사용 후 3초 동안 모든 스킬의 공격 속도가 20%만큼 증가한다. 이 효과가 지속되는 동안 레인저의 기본공격인 석궁 발사가 대형의 적과 보스에게 가하는 최종 피해가 0.8배가 된다.",
	img:	"http://cfile21.uf.tistory.com/image/27469736519D11E41355BC",
	pt:		4,
	need:	24,
	job:	"레인저",
	move:	true,
}

skills["사기충전"] = {
	type:	"",
	dec:	"대형의 적에 대한 모든 공격이 명중할 때마다 정신력을 5만큼 회복한다.",
	img:	"http://cfile24.uf.tistory.com/image/2756BE38519D11E31B4719",
	pt:		3,
	need:	24,
	job:	"레인저",
	move:	true,
}

skills["매서운 집중력"] = {
	type:	"",
	dec:	"기교, 마법, 비전 형태 공격이 6미터 이상의 거리에서 적에게 명중하면 최종 피해가 1.1배가 된다",
	img:	"http://cfile5.uf.tistory.com/image/23550238519D11E41E7A1C",
	pt:		3,
	need:	24,
	job:	"레인저",
	move:	true,
}

skills["매의 눈"] = {
	type:	"",
	dec:	"석궁 발사, 발리 샷, 폭풍 쏘기의사정거리가 2미터 증가한다.",
	img:	"http://cfile2.uf.tistory.com/image/03228533519D11E2109717",
	pt:		3,
	need:	24,
	job:	"레인저",
	move:	true,
}

skills["민첩한 사냥꾼"] = {
	type:	"",
	dec:	"기습 침투에 의한 공격이 대형의 적과 보스에게 주는 최종 피해가 2배가 된다. 발리 샷, 무빙 샷의 정신력 소모량이 30만큼 감소한다.",
	img:	"http://cfile27.uf.tistory.com/image/01467036519D11E413F85C",
	pt:		5,
	need:	32,
	job:	"레인저",
}

skills["폭풍 쏘기"] = {
	type:	"",
	dec:	"에로우 레인 단축키를 1초 이상 눌러 폭풍 쏘기를 발동 시킨다. 전방 적 1명에게 공격력의 300%만큼의 피해를 7회 준다.(최종 피해 1.1배 증가)",
	img:	"http://cfile8.uf.tistory.com/image/2353B638519D11E31FDA44",
	pt:		5,
	need:	32,
	job:	"레인저",
}

// 클레릭

skills["차징 쇼크"] = {
	type:	"",
	dec:	"둔기로 땅을 내리쳐 신성한 충격파를 일으킴. 단축키를 누르고 있는 동안 힘을 모으고, 떼는 순간 발동. 공격력의 300%만큼 피해를 주고 정신력 200 회복(명중 시).",
	img:	"http://cfile2.uf.tistory.com/image/24618E49519D16A01C71FB",
	pt:		0,
	need:	0,
	job:	"클레릭",
	move:	true,
}

skills["힐"] = {
	type:	"",
	dec:	"상처를 치유. 자신을 포함, 반경 8미터 내 아군의 생명력을 공격력의 150%+60만큼 회복",
	img:	"http://cfile21.uf.tistory.com/image/2462F649519D16A01CD25A",
	pt:		0,
	need:	0,
	job:	"클레릭",
}

skills["둔기 타격"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 둔기를 휘둘러 공격. 공격력의 140%만큼 피해를 주고, 정신력을 30만큼 회복",
	img:	"http://cfile21.uf.tistory.com/image/27304148519D16A31BAE08",
	pt:		0,
	need:	0,
	job:	"클레릭",
}

skills["긴급 회피"] = {
	type:	"",
	dec:	"클레릭의 대시 스킬. 바라보고 있는 방향으로 굴러서 빠르게 이동.",
	img:	"http://cfile9.uf.tistory.com/image/01456750519D16A312CAFE",
	pt:		0,
	need:	0,
	job:	"클레릭",
}

skills["콤보 스윙"] = {
	type:	"",
	dec:	"무기를 연속으로 휘둘러 공격력의 350% 피해. 단축키를 연타하면 3회까지 연속사용 가능. 사용 중 넉백저항 2증가.",
	img:	"http://cfile30.uf.tistory.com/image/22629649519D16A11C5301",
	pt:		2,
	need:	0,
	job:	"클레릭",
	move:	true,
}

skills["둔기 타격 강화1"] = {
	type:	"",
	dec:	"기본공격시 5%의 확률로 후려치기 발동. 2명 추가공격 및 공격력의 50%만큼 추가피해. 보스를 제외한 적을 기절시킴",
	img:	"http://cfile28.uf.tistory.com/image/262FF848519D16A41D70A2",
	pt:		3,
	need:	0,
	job:	"클레릭",
}

skills["열광"] = {
	type:	"",
	dec:	"힐을 사용했을 때, 주위의 적에게 공격력의 100% 만큼 피해를 줌. 정신력 100 회복",
	img:	"http://cfile4.uf.tistory.com/image/0261F149519D16A11C1EFB",
	pt:		2,
	need:	0,
	job:	"클레릭",
	move:	true,
}

skills["치유 연마"] = {
	type:	"",
	dec:	"회복 형태 스킬의 시전속도가 20% 증가, 회복 형태 스킬 사용 시 정신력 100 회복",
	img:	"http://cfile8.uf.tistory.com/image/2346F750519D16A20FB198",
	pt:		3,
	need:	0,
	job:	"클레릭",
	move:	true,
}

skills["저지먼트"] = {
	type:	"",
	dec:	"주위의 소형과 중형의 적에게 공격력의 360%만큼, 대형의 적과 보스에게 400%만큼 피해",
	img:	"http://cfile22.uf.tistory.com/image/2161B649519D16A11D5DDA",
	pt:		2,
	need:	8,
	job:	"클레릭",
	move:	true,
}

skills["무관용 원칙"] = {
	type:	"",
	dec:	"저지먼트가 명중하면 30%의 확률로 낙인 효과",
	img:	"http://cfile3.uf.tistory.com/image/26630849519D16A11C99AE",
	pt:		2,
	need:	8,
	job:	"클레릭",
	move:	true,
}

skills["낙인 폭발"] = {
	type:	"",
	dec:	"낙인이 찍힌 적을 저지먼트나 디바인 브레이크로 공격하면 낙인 폭발이 일어남.(소형 = 공격력 150%, 중형 = 공격력200%, 대형 = 공격력400%)",
	img:	"http://cfile30.uf.tistory.com/image/0161DE49519D16A21C2E10",
	pt:		2,
	need:	8,
	job:	"클레릭",
	move:	true,
}

skills["신성 충격"] = {
	type:	"",
	dec:	"콤보 스윙의 마지막 공격이 5%확률로 적을 기절시키고 콤보 스윙이 대형의 적과 보스에 주는 피해 10% 증가. 차징 쇼크가 대형의 적과 보스에 주는 피해 100% 증가",
	img:	"http://cfile28.uf.tistory.com/image/2662CD49519D16A11C55B0",
	pt:		2,
	need:	8,
	job:	"클레릭",
	move:	true,
}

skills["힘의 축적"] = {
	type:	"",
	dec:	"힘을 모으는 스킬을 강화. 힘을 1단계 더 모을 수 있음.",
	img:	"http://cfile24.uf.tistory.com/image/03455150519D16A212C466",
	pt:		2,
	need:	8,
	job:	"클레릭",
	move:	true,
}

skills["디바인 브레이크"] = {
	type:	"",
	dec:	"빛의 망치로 적을 강타. 공격력의 800%만큼 피해를 주고 적의 방어력을 30초 동안 10%만큼 감소시킴",
	img:	"http://cfile3.uf.tistory.com/image/21636749519D16A11C0416",
	pt:		3,
	need:	16,
	job:	"클레릭",
	move:	true,
}

skills["둔기 타격 강화2"] = {
	type:	"",
	dec:	"낙인이 찍힌 적에게 기본 공격을 가하면 낙인 폭발이 일어남.(소형 = 공격력 150%, 중형 = 공격력200%, 대형 = 공격력400%)",
	img:	"http://cfile4.uf.tistory.com/image/23303548519D16A41D803C",
	pt:		3,
	need:	16,
	job:	"클레릭",
}

skills["무자비한 심판"] = {
	type:	"",
	dec:	"저지먼트 사용 시 50%의 확률로 추가효과 발동. 보스를 제외한 적을 100%확률로 수면에 빠뜨림.",
	img:	"http://cfile8.uf.tistory.com/image/22300D48519D16A31B071D",
	pt:		2,
	need:	16,
	job:	"클레릭",
	move:	true,
}

skills["성직자의 투지"] = {
	type:	"",
	dec:	"힐 사용 직후 차징 쇼크를 사용하면 힘을 1단계 모은 상태로 발동.",
	img:	"http://cfile6.uf.tistory.com/image/22301948519D16A31B2966",
	pt:		2,
	need:	16,
	job:	"클레릭",
	move:	true,
}

skills["영혼의 수면"] = {
	type:	"",
	dec:	"디바인 브레이크 사용 시 주위 보스를 제외한 적을 100%확률로 수면에 빠뜨림",
	img:	"http://cfile6.uf.tistory.com/image/2446ED50519D16A210F02E",
	pt:		5,
	need:	24,
	job:	"클레릭",
	move:	true,
}

skills["신성한 철권"] = {
	type:	"",
	dec:	"수면 상태의 적을 공격 시, 공격력의 200%만큼 추가피해를 줌",
	img:	"http://cfile6.uf.tistory.com/image/02635649519D16A11CA98D",
	pt:		3,
	need:	24,
	job:	"클레릭",
	move:	true,
}

skills["생명수의 힘"] = {
	type:	"",
	dec:	"회복 형태 스킬의 치유 효과가 10%증가",
	img:	"http://cfile23.uf.tistory.com/image/02300648519D16A31C77C3",
	pt:		2,
	need:	24,
	job:	"클레릭",
	move:	true,
}

skills["성직자의 맹세"] = {
	type:	"",
	dec:	"디바인 브레이크의 방어력 경감 효과가 5%만큼 증가하고 지속시간이 10초만큼 추가.",
	img:	"http://cfile24.uf.tistory.com/image/032F4D48519D16A31E4371",
	pt:		3,
	need:	24,
	job:	"클레릭",
	move:	true,
}

skills["신의 가호"] = {
	type:	"",
	dec:	"생명력이 30%이하일때 자연 회복속도가 초당 10만큼 증가",
	img:	"http://cfile23.uf.tistory.com/image/2144BD50519D16A212FC1D",
	pt:		5,
	need:	24,
	job:	"클레릭",
	move:	true,
}

skills["근엄한 성직자"] = {
	type:	"",
	dec:	"디바인 브레이크, 저지먼트가 대형의 적과 보스에게 가하는 최종 피해 1.3배. 스킬 명중 시 정신력 400 회복",
	img:	"http://cfile27.uf.tistory.com/image/2246E850519D16A210DEB8",
	pt:		5,
	need:	32,
	job:	"클레릭",
}

skills["대지모신의 자비"] = {
	type:	"",
	dec:	"힐의 생명력 회복량이 20% 증가",
	img:	"http://cfile2.uf.tistory.com/image/01444B50519D16A215C3DF",
	pt:		5,
	need:	32,
	job:	"클레릭",
}

// 버서커

skills["스피닝 어설트"] = {
	type:	"",
	dec:	"적을 관통하며 돌진하여 주위의 모든 적을 밴다. 공격력의 360%만큼 피해를 주고 정신력 300을 회복",
	img:	"http://cfile27.uf.tistory.com/image/2115C14D519D1A8E12E526",
	pt:		0,
	need:	0,
	job:	"버서커",
	move:	true,
}

skills["라이징 슬래쉬"] = {
	type:	"",
	dec:	"전방의 적을 어깨로 밀친 뒤, 무기를 들어올려 강하게 뱀다. 밀치기 공격이 공격력의 100%만큼, 베기 공격이 600%만큼 피해를 준다. 소,중형의 적에게 1.7배의 최종피해를 줌.",
	img:	"http://cfile22.uf.tistory.com/image/0315B04D519D1A8E13903B",
	pt:		0,
	need:	0,
	job:	"버서커",
	move:	true,
}

skills["광전사의 분노"] = {
	type:	"",
	dec:	"스피닝 어설트로 적을 죽이면 분노상태가 됨. 분노 상태가 되면 공격속도 5%, 이동 속도 10% 상승, 버서커, 캐논 블레이저, 클레릭, 워리어, 워 프리스트의 대시가 짧은 돌진 형태로 변경. 버서커의 기본공격, 스피닝 어설트, 라이징 슬래쉬, 워 크라이의 공격속도가 추가로 10% 상승. 분노상태는 10초동안 지속된다.",
	img:	"http://cfile5.uf.tistory.com/image/2615514D519D1A8E113FE1",
	pt:		0,
	need:	0,
	job:	"버서커",
	move:	true,
}

skills["대검 베기"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 대검을 휘둘러 적을 공격. 공격력의 160%만큼 피해를 주고 정신력을 30만큼 회복.",
	img:	"http://cfile21.uf.tistory.com/image/2715C64D519D1A9013B9CF",
	pt:		0,
	need:	0,
	job:	"버서커",
}

skills["전진 구르기"] = {
	type:	"",
	dec:	"버서커의 대시 스킬. 바라보고 있는 방향으로 굴러서 빠르게 이동함.",
	img:	"http://cfile25.uf.tistory.com/image/260F794C519D1A90162820",
	pt:		0,
	need:	0,
	job:	"버서커",
}

skills["워 크라이"] = {
	type:	"",
	dec:	"투지가 넘치는 고함을 질러 8미터 거리 안에 있는 적에게 공격력 100%만큼 피해를 줌. 공격력의 30%만큼 생명력 회복. 명중한 적 1명당 공격력의 10%만큼 생명력을 추가 회복함.",
	img:	"http://cfile1.uf.tistory.com/image/21159D4D519D1A8E13EF80",
	pt:		2,
	need:	0,
	job:	"버서커",
	move:	true,
}

skills["대검 베기 강화1"] = {
	type:	"",
	dec:	"기본 공격 시 10% 확률로 회전 베기가 발동. 공격력의 300%만큼 피해를 준다.",
	img:	"http://cfile26.uf.tistory.com/image/0215CB4D519D1A9013C9A6",
	pt:		2,
	need:	0,
	job:	"버서커",
}

skills["분노의 폭풍"] = {
	type:	"",
	dec:	"분노상태에서 라이징 슬래쉬 사용 시 앞으로, 스피닝 어설트 사용 시 뒤로 검풍 회오리가 발사됨. 검풍 회오리는 절단 형태로, 적을 관통하며 직진하여 공격력 100%만큼 피해를 줌.",
	img:	"http://cfile5.uf.tistory.com/image/0315814D519D1A8D130A00",
	pt:		2,
	need:	0,
	job:	"버서커",
	move:	true,
}

skills["샘솟는 투지"] = {
	type:	"",
	dec:	"분노상태일 때 정신력 자연 회복량이 초당 10만큼 증가.",
	img:	"http://cfile21.uf.tistory.com/image/2215DC4D519D1A8F13DD36",
	pt:		2,
	need:	0,
	job:	"버서커",
	move:	true,
}

skills["불타는 증오"] = {
	type:	"",
	dec:	"검풍 회오리 (대검 베기 강화2→분노의 폭풍), 회오리(→워리어)가 적에게 명중할 때마다 공격력의 5%만큼 생명력 회복.",
	img:	"http://cfile1.uf.tistory.com/image/27157B4D519D1A8D143B75",
	pt:		2,
	need:	0,
	job:	"버서커",
	move:	true,
}

skills["대검 베기 강화2"] = {
	type:	"",
	dec:	"회전 베기(대검 베기 강화1)가 발동하면 절단 형태의 검풍 회오리가 발사. 검풍 회오리는 적을 관통하며 직진, 공격력의 100%만큼 피해를 줌.",
	img:	"http://cfile7.uf.tistory.com/image/0315D84D519D1A90131A45",
	pt:		2,
	need:	8,
	job:	"버서커",
}

skills["격노의 외침"] = {
	type:	"",
	dec:	"워 크라이를 사용하면 30초 동안 공격력이 10% 증가, 적의 공격력을 10%만큼 감소, 명중한 적 1명당 정신력을 50만큼 회복.",
	img:	"http://cfile24.uf.tistory.com/image/0215BC4D519D1A8E1330D2",
	pt:		2,
	need:	8,
	job:	"버서커",
	move:	true,
}

skills["공격 본능"] = {
	type:	"",
	dec:	"라이징 슬래쉬로 적을 죽이면 분노상태가 됨. 분노 상태가 되면 공격속도 5%, 이동 속도 10% 상승, 버서커, 캐논 블레이저, 클레릭, 워리어, 워 프리스트의 대시가 짧은 돌진 형태로 변경. 버서커의 기본공격, 스피닝 어설트, 라이징 슬래쉬, 워 크라이의 공격속도가 추가로 10% 상승. 분노상태는 10초동안 지속된다.",
	img:	"http://cfile6.uf.tistory.com/image/2715974D519D1A8D1389BD",
	pt:		2,
	need:	8,
	job:	"버서커",
	move:	true,
}

skills["피의 부름"] = {
	type:	"",
	dec:	"라이징 슬래쉬가 대형의 적과 보스에게 명중하면 공격력의 20%만큼 생명력을 회복하고 분노상태가 됨.분노 상태가 되면 공격속도 5%, 이동 속도 10% 상승, 버서커, 캐논 블레이저, 클레릭, 워리어, 워 프리스트의 대시가 짧은 돌진 형태로 변경. 버서커의 기본공격, 스피닝 어설트, 라이징 슬래쉬, 워 크라이의 공격속도가 추가로 10% 상승. 분노상태는 10초동안 지속된다.",
	img:	"http://cfile6.uf.tistory.com/image/2515B54D519D1A8E1379F6",
	pt:		2,
	need:	8,
	job:	"버서커",
	move:	true,
}

skills["강철의 전의"] = {
	type:	"",
	dec:	"분노상태에서 모든 모으기 시간이 20% 감소, 넉백 저항이 1만큼 증가. (적의 공격에 밀려났을 때 밀려나는 거리와 경직 시간이 줄어든다.)",
	img:	"http://cfile4.uf.tistory.com/image/2411334C519D1A901477D2",
	pt:		2,
	need:	8,
	job:	"버서커",
	move:	true,
}

skills["대검 베기 강화3"] = {
	type:	"",
	dec:	"기본 공격으로 소형, 중형 적을 공격하면 적 1명당 정신력 5만큼 추가 회복.",
	img:	"http://cfile10.uf.tistory.com/image/2313A34D519D1A91157F5F",
	pt:		2,
	need:	16,
	job:	"버서커",
}

skills["끝없는 충동"] = {
	type:	"",
	dec:	"분노 상태에서 적을 죽일 때마다 정신력 10 회복",
	img:	"http://cfile29.uf.tistory.com/image/2615874D519D1A8D136B81",
	pt:		2,
	need:	16,
	job:	"버서커",
	move:	true,
}

skills["돌진 베기"] = {
	type:	"",
	dec:	"워크라이, 실드 크러쉬(→워리어),다크 볼텍스(→워록)스킬의 단축키를 연타하여 후속 공격 돌진 베기를 발동. 적을 밀치며 돌진한 후 무기를 크게 휘둘러 벤다. 돌진으로 공격력의 50%만큼 피해를 5회 주고, 전방 베기로 공격력의 400%만큼 피해를 줌.",
	img:	"http://cfile8.uf.tistory.com/image/0115A94D519D1A8E13E9F3",
	pt:		2,
	need:	16,
	job:	"버서커",
	move:	true,
}

skills["검의 달인"] = {
	type:	"",
	dec:	"절단 형태 공격이 명중하면 정신력을 3만큼 회복",
	img:	"http://cfile26.uf.tistory.com/image/020F604C519D1A90192AD0",
	pt:		2,
	need:	16,
	job:	"버서커",
	move:	true,
}

skills["투쟁심"] = {
	type:	"",
	dec:	"기절 상태가 되면 1초마다 해제를 시도. 20%의 확률로 기절 상태가 해제되어 깨어남",
	img:	"http://cfile23.uf.tistory.com/image/2415574D519D1A8E135877",
	pt:		2,
	need:	16,
	job:	"버서커",
	move:	true,
}

skills["블러드러스트"] = {
	type:	"",
	dec:	"버서커의 숨겨진 힘을 개방하여 각성 상태에 돌입. 각성 상태일 때 공격속도 5%, 이동속도 10%가 증가, 모으기시간 20%가 감소. 버서커의 대검 베기 , 스피닝 어설트, 라이징 슬래쉬, 워 크라이의 공격속도가 추가로 10% 증가한다. 버서커, 캐논 블레이저, 클레릭, 워리어, 워 프리스트의 대시가 짧은 돌진 형태로 변경된다. 정신력이 0.5초당 50씩 소모되며 정신력이 0이 될 때까지 각성 상태가 지속됨.",
	img:	"http://cfile23.uf.tistory.com/image/2315914D519D1A8F13BA80",
	pt:		5,
	need:	24,
	job:	"버서커",
	move:	true,
}

skills["처절한 맹공"] = {
	type:	"",
	dec:	"적을 기절 상태로 만들면 3초 동안 모든 공격의 최종 피해가 1.1배가 됨",
	img:	"http://cfile9.uf.tistory.com/image/2315D04D519D1A8F13104A",
	pt:		4,
	need:	24,
	job:	"버서커",
	move:	true,
}

skills["힘의 집중"] = {
	type:	"",
	dec:	"모으기 시간이 10% 감소",
	img:	"http://cfile5.uf.tistory.com/image/23111F4C519D1A8F151CE9",
	pt:		4,
	need:	24,
	job:	"버서커",
	move:	true,
}

skills["피의 숙청"] = {
	type:	"",
	dec:	"3미터 거리 내의 적에게 가하는 모든 공격의 최종 피해가 1.1배",
	img:	"http://cfile6.uf.tistory.com/image/25138A4D519D1A8D14159F",
	pt:		5,
	need:	24,
	job:	"버서커",
	move:	true,
}

skills["불멸의 전사"] = {
	type:	"",
	dec:	"최대 생명력이 500만큼 증가.",
	img:	"http://cfile8.uf.tistory.com/image/26155D4D519D1A8D1366F5",
	pt:		5,
	need:	24,
	job:	"버서커",
	move:	true,
}

skills["분노 해방"] = {
	type:	"",
	dec:	"라이징 슬래쉬의 모으기 시간이 30% 감소. 각성 상태에서 사용하는 모든 스킬이 정신력을 소모하지 않는다.",
	img:	"http://cfile5.uf.tistory.com/image/0111274C519D1A8F14246A",
	pt:		5,
	need:	32,
	job:	"버서커",
}

skills["일도양단"] = {
	type:	"",
	dec:	"라이징 슬래쉬를 사용할 때 단축키를 누른 채 유지하면 힘을 모을 수 있게 됨. 모을 수록 라이징 슬래쉬의 베기 공격의 위력이 강해짐. 즉시시전 : 공격력의 600%만큼 피해, 모으기 1단계 : 공격력의 1000%만큼 피해, (강화 필요)모으기 2단계 : 공격력의 2000%만큼 피해. 이 공격은 소, 중형의 적에게 1.7배의 최종 피해를 준다. 모으기 2단계를 사용하기 위해선 힘의 축적(→클레릭), 숨죽인 살기(→캐논블레이저)등의 스킬이 필요.",
	img:	"http://cfile8.uf.tistory.com/image/0211094C519D1A8F150DB1",
	pt:		5,
	need:	32,
	job:	"버서커",
}

// 위자드

skills["아케인 서클"] = {
	type:	"",
	dec:	"6초간 지속되는 6미터 크기의 마법진을 소환하여, 위저드 자신의 기본 공격이 동시에 2발 더 발사되며 공격속도가 10% 증가한다.",
	img:	"http://cfile23.uf.tistory.com/image/27535E38519D203727EA79",
	pt:		0,
	need:	0,
	job:	"위자드",
	move:	true,
}

skills["아케인 버스트"] = {
	type:	"",
	dec:	"마력을 집중하여 강력한 마법탄을 발사한다. 힘을 모을수록 발사 속도가 빨라지며, 각 마법탄은 공격력의 90%만큼 피해를 준다. 1단계 이후 단축키에서 손을 떼면 강력한 마법구가 추가로 발사되어 공격력의 400%만큼 피해를 준다.<br/>모으기 0단계 : 0.2초당 1발 발사<br/>(강화 필요)모으기 1단계 : 0.15초당 1발 발사<br/>모으기 1단계를 사용하기 위해서는 힘의 축적이나, 숨죽인 살기등의 스킬 필요하다.",
	img:	"http://cfile26.uf.tistory.com/image/27567C38519D2038233674",
	pt:		0,
	need:	0,
	job:	"위자드",
	move:	true,
}

skills["마법탄 발사"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 적 3명을 동시에 공격하는 마법탄을 발사하여 공격력의 132%만큼 피해를 주고, 명중한 적 1명마다 정신력 30씩 회복",
	img:	"http://cfile2.uf.tistory.com/image/2456A638519D203922E5CB",
	pt:		0,
	need:	0,
	job:	"위자드",
}

skills["고속 이동"] = {
	type:	"",
	dec:	"위저드의 대시 스킬로, 바라보고 있는 방향으로 빠르게 이동한다.",
	img:	"http://cfile4.uf.tistory.com/image/23568C38519D2039276CC0",
	pt:		0,
	need:	0,
	job:	"위자드",
}

skills["버스트 텔레포트"] = {
	type:	"",
	dec:	"전방으로 8미터를 이동하며, 도착 지점에서 6개의 마법탄을 2번 발사한다. 각 마법탄은 공격력의 123%만큼 피해를 준다.",
	img:	"http://cfile7.uf.tistory.com/image/22552638519D2037288509",
	pt:		2,
	need:	0,
	job:	"위자드",
	move:	true,
}

skills["마법탄 발사 강화1"] = {
	type:	"",
	dec:	"기본 공격시 10%의 확률로 마법탄을 3회 연속 발사한다. 각각 공격력의 65%만큼 피해를 준다.버스트 텔레포트가 명중한 적 1명마다 정신력을 30만큼 회복한다.아케인 버스트가 대형의 적과 보스에게 1.2배의 최종 피해를 준다.",
	img:	"http://cfile7.uf.tistory.com/image/2654B338519D2039284013",
	pt:		2,
	need:	0,
	job:	"위자드",
}

skills["전장의 마도사"] = {
	type:	"",
	dec:	"대시를 사용한 후 가까이 있는 적 2명에게 마법탄을 발사하며, 각각 공격력의 80%만큼 피해를 준다. 마법탄이 발사된 후 0.5초 동안은 다시 발사되지 않는다. 이 스킬은 위저드, 메이지, 하이프리스트의 기본 대시와 버서커의 스킬에 의해 분노 또는 각성 상태가 된 워리어, 버서커, 캐논블레이저, 클레릭, 워프리스트의 대시에 적용된다.",
	img:	"http://cfile10.uf.tistory.com/image/24559238519D203925E749",
	pt:		3,
	need:	0,
	job:	"위자드",
	move:	true,
}

skills["생명력 고양"] = {
	type:	"",
	dec:	"버스트 텔레포트 사용 후 명중한 적 1명마다 공격력의 10%만큼 생명력 회복",
	img:	"http://cfile26.uf.tistory.com/image/2456B238519D2038261DF3",
	pt:		2,
	need:	0,
	job:	"위자드",
	move:	true,
}

skills["원소의 폭풍"] = {
	type:	"",
	dec:	"적에게 화염 속성 피해를 주면 5% 확률로 화염 폭발이 일어난다. 적에게 공격력의 100%만큼 추가 피해를 준다.",
	img:	"http://cfile7.uf.tistory.com/image/254F9837519D2037180113",
	pt:		2,
	need:	0,
	job:	"위자드",
	move:	true,
}

skills["마법탄 발사 강화2"] = {
	type:	"",
	dec:	"기본 공격시 10%의 확률로 5명의 적을 동시에 공격하여, 각각의 적에게 공격력의 132%만큼 피해를 준다.전장의 마도사 스킬의 마법탄이 명중한 적 1명 마다 정신력을 30만큼 회복한다.",
	img:	"http://cfile7.uf.tistory.com/image/23569038519D203925A3D5",
	pt:		2,
	need:	8,
	job:	"위자드",
}

skills["중력탄"] = {
	type:	"",
	dec:	"아케인 서클 사용 직후 1초 내에 사용하는 첫 번째 기본 공격이 중력탄으로 변경된다. 중력탄은 6미터 전방에서 폭발을 일으켜, 직경 12미터 범위 내의 적을 끌어당긴다.",
	img:	"http://cfile6.uf.tistory.com/image/03566138519D203726DE58",
	pt:		2,
	need:	8,
	job:	"위자드",
	move:	true,
}

skills["비전의 화살"] = {
	type:	"",
	dec:	"아케인 버스트가 대형의 적에게 명중할 때마다 정신력을 5만큼 추가회복한다.",
	img:	"http://cfile22.uf.tistory.com/image/264F9037519D2036181E72",
	pt:		3,
	need:	8,
	job:	"위자드",
	move:	true,
}

skills["비전의 계승자"] = {
	type:	"",
	dec:	"아케인 서클을 강화하여 지속시간이 12초로 증가하고, 범위 내에서 힘을 모으는 시간이 50%만큼 감소한다.아케인 서클의 범위 안에 들어온 적의 이동 속도를 30%만큼 저하시킨다.(보스 제외)아케인 서클의 강화 효과가 아군에게도 적용된다.",
	img:	"http://cfile21.uf.tistory.com/image/234EC837519D203618B964",
	pt:		3,
	need:	8,
	job:	"위자드",
	move:	true,
}

skills["마법탄 발사 강화3"] = {
	type:	"",
	dec:	"기본 공격이 대형의 적과 보스에게 명중할 때마다 정신력을 13만큼 추가 회복한다.",
	img:	"http://cfile4.uf.tistory.com/image/2629D339519D2039239598",
	pt:		2,
	need:	16,
	job:	"위자드",
}

skills["공간 지배"] = {
	type:	"",
	dec:	"버스트 텔레포트를 2회 연속으로 사용할 수 있게 되며, 발사하는 마법탄의 수가 4개 증가한다. 단축키를 연타하여 2회 연속 사용할 수 있으나, 두 번째 텔레포트는 마법탄이 발사되지 않는다.",
	img:	"http://cfile3.uf.tistory.com/image/014EA637519D20361A2061",
	pt:		3,
	need:	16,
	job:	"위자드",
	move:	true,
}

skills["불연성 육체"] = {
	type:	"",
	dec:	"발화 상태가 되면 1초마다 해제를 시도하여, 10%의 확률로 발화가 해제된다.",
	img:	"http://cfile7.uf.tistory.com/image/244CF437519D20361FFBF7",
	pt:		2,
	need:	16,
	job:	"위자드",
	move:	true,
}

skills["무아의 경지"] = {
	type:	"",
	dec:	"피해를 입으면 3초간 공격속도가 10%만큼 증가한다.",
	img:	"http://cfile5.uf.tistory.com/image/01293139519D203924AF98",
	pt:		3,
	need:	16,
	job:	"위자드",
	move:	true,
}

skills["플레임 아바타"] = {
	type:	"",
	dec:	"몸을 불꽃으로 감싸 불의 정령으로 변신한다. 6초간 무적 상태가 되며, 주변의 적에게 0.5초당 공격력의 100%만큼 화염 피해를 주고, 보스를 제외한 적을 100%의 확률로 발화시킨다.",
	img:	"http://cfile24.uf.tistory.com/image/25545738519D203827563E",
	pt:		4,
	need:	24,
	job:	"위자드",
	move:	true,
}

skills["비전 폭발"] = {
	type:	"",
	dec:	"아케인 버스트가 대형, 보스 몬스터에게 가하는 최종 피해가 1.1배가 된다.",
	img:	"http://cfile22.uf.tistory.com/image/26554838519D20382739B5",
	pt:		4,
	need:	24,
	job:	"위자드",
	move:	true,
}

skills["숨겨진 저력"] = {
	type:	"",
	dec:	"모으기 시간이 10%만큼 단축된다.",
	img:	"http://cfile4.uf.tistory.com/image/23567238519D20382668F7",
	pt:		4,
	need:	24,
	job:	"위자드",
	move:	true,
}

skills["원소의 손길"] = {
	type:	"",
	dec:	"인첸트 엘리멘탈에 의해 부여된 속성과 같은 속성을 지닌 모든 공격의 피해가 10% 감소",
	img:	"http://cfile28.uf.tistory.com/image/014DFC37519D203719FF88",
	pt:		2,
	need:	24,
	job:	"위자드",
	move:	true,
}

skills["원소 항체"] = {
	type:	"",
	dec:	"속성 피해를 입은 경우, 5초간 화염, 냉기, 전기 속성에 의한 피해가 10%만큼 감소",
	img:	"http://cfile28.uf.tistory.com/image/0256AA38519D203827374B",
	pt:		3,
	need:	24,
	job:	"위자드",
	move:	true,
}

skills["인첸트 엘리멘탈"] = {
	type:	"",
	dec:	"원소의 힘을 소환하여 30초간 아케인 버스트 스킬이 화염, 냉기, 전기 속성 중 하나로 변화하고, 모든 스킬에 공격력의 10%만큼 속성 피해가 추가된다.",
	img:	"http://cfile8.uf.tistory.com/image/014C7437519D20371D0E8A",
	pt:		5,
	need:	32,
	job:	"위자드",
	move:	true,
}

skills["화염의 지배자"] = {
	type:	"",
	dec:	"플레임 아바타를 사용하면 자신에게 걸린 모든 상태이상이 해제된다.플레임 아바타의 지속시간이 종료될 때 화염 폭발을 일으켜 주위의 적에게 공격력의 1200%만큼 피해를 주고, 100%의 확률로 발화를 일으킨다.",
	img:	"http://cfile6.uf.tistory.com/image/244EDA37519D2036198082",
	pt:		5,
	need:	32,
	job:	"위자드",
}


skills["박식한 마법학자"] = {
	type:	"",
	dec:	"아케인 버스트가 대형의 적과 보스에게 주는 최종 피해가 1.2배가 된다.위저드의 기본 공격과 대시 사용시 발사하는 마법탄의 최종 피해가 1.1배가 된다.레인저와 캐논블레이저가 사용하는 발사 스킬의 최종 피해가 1.1배가 된다.",
	img:	"http://cfile21.uf.tistory.com/image/214DF537519D20361ADB21",
	pt:		5,
	need:	32,
	job:	"위자드",
}

// 어쌔신

skills["블루밍 대거"] = {
	type:	"",
	dec:	"전방위로 단검을 투척하여 주위의 모든 적을 공격하며 공격력의 100%만큼 피해를 준다.",
	img:	"http://cfile4.uf.tistory.com/image/232A2044519D243E214CB0",
	pt:		0,
	need:	0,
	job:	"어쌔신",
	move:	true,
}

skills["페이탈 스탭"] = {
	type:	"",
	dec:	"적의 급소를 찔러 공격력의 335%만큼 피해를 주고 넉백 효과를 발생 시킨다.",
	img:	"http://cfile4.uf.tistory.com/image/23143045519D243F22C73F",
	pt:		0,
	need:	0,
	job:	"어쌔신",
	move:	true,
}

skills["단검 베기"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 단검을 휘둘러 적을 공격한다. 공격력의 115%만큼 피해를 주고, 명중한 적 1명마다 정신력 35를 회복한다.",
	img:	"http://cfile21.uf.tistory.com/image/032A5344519D24412191C2",
	pt:		0,
	need:	0,
	job:	"어쌔신",
}

skills["급습"] = {
	type:	"",
	dec:	"어새신의 대시 스킬. 바라보고 있는 방향으로 빠르게 이동하며 도착 위치에 있는 적에게 공격력의 50%만큼 피해를 준다.",
	img:	"http://cfile7.uf.tistory.com/image/23290844519D24402362DD",
	pt:		0,
	need:	0,
	job:	"어쌔신",
}

skills["새도우 리프"] = {
	type:	"",
	dec:	"높게 점프한 뒤 지상으로 폭탄을 떨구며 착지한다. 체공중에는 공격을 받지 않으며, 공격력의 250%만큼 피해를 주고 넉백 효과를 발생시킨다. 명중한 적 1명당 정신력을 30만큼 회복한다.",
	img:	"http://cfile5.uf.tistory.com/image/25151445519D243E227EF9",
	pt:		2,
	need:	0,
	job:	"어쌔신",
	move:	true,
}

skills["단검 베기 강화1"] = {
	type:	"",
	dec:	"대시(->급습)로 보스를 제외한 적을 공격하면 1초 동안 단검 베기의 공격속도가 50% 증가한다. 다른 직업의 대시 스킬에는 적용되지 않는다.페이탈 스탭으로 소형이나 중형의 적을 죽이면 공격력의 20%만큼 생명력을 회복한다. 대형의 적과 보스를 죽이면 공격력의 150%만큼 생명력을 회복한다.",
	img:	"http://cfile8.uf.tistory.com/image/22277D44519D244124F084",
	pt:		2,
	need:	0,
	job:	"어쌔신",
}

skills["사슬낫 던지기"] = {
	type:	"",
	dec:	"섀도우 리프, 하이점프(->레인저), 소울 커터(->워록), 온슬로트(->워프리스트)스킬의 단축키를 연타하여 후속공격 사슬낫 던지기를 발동한다. 전방 10미터 이내의 적 1명에게 사슬낫을 던져 공격력의 200%만큼 피해를 주고 적이 넉백저항 속성이 없으면 명중한 적을 자신에게 끌어당긴다. 명중한 적이 대형의 적 또는 보스인 경우 정신력을 400만큼 회복한다.",
	img:	"http://cfile5.uf.tistory.com/image/2115D145519D243F1F5EFE",
	pt:		2,
	need:	0,
	job:	"어쌔신",
	move:	true,
}

skills["냉혹한 처단"] = {
	type:	"",
	dec:	"사슬낫 던지기가 명중하면 1초 동안 페이탈 스탭이 가하는 최종 피해가 1.5배가 된다.",
	img:	"http://cfile28.uf.tistory.com/image/2628D444519D243D2278C7",
	pt:		2,
	need:	0,
	job:	"어쌔신",
	move:	true,
}

skills["대량 학살"] = {
	type:	"",
	dec:	"블루밍 대거, 워록의 기본공격 사용시 10%의 확률로 2단 공격하여 1.5배의 최종 피해를 주고 경직시킨다. 소형의 적에게 가하는 최종피해는 1.1배가 된다.",
	img:	"http://cfile27.uf.tistory.com/image/26290F44519D243E22AFCA",
	pt:		2,
	need:	0,
	job:	"어쌔신",
	move:	true,
}

skills["단검 베기 강화2"] = {
	type:	"",
	dec:	"기본 공격 시 5%의 확률로 기본공격 대신 그림자 베기가 발동하여 공격력의 200%만큼 피해를 준다.",
	img:	"http://cfile6.uf.tistory.com/image/037F1F40519D24411E3AAD",
	pt:		2,
	need:	8,
	job:	"어쌔신",
}

skills["치명적인 독"] = {
	type:	"",
	dec:	"대시(->급습)를 두 번 연속으로 사용하면 무기에 독을 발라 5초 동안 모든 공격에 독 속성이 추가 되며, 공격력의 10%만큼 추가 피해를 준다.",
	img:	"http://cfile25.uf.tistory.com/image/21150E45519D243F21A666",
	pt:		2,
	need:	8,
	job:	"어쌔신",
	move:	true,
}

skills["폭발 부적"] = {
	type:	"",
	dec:	"하이퍼 슬래쉬 명중시 50%, 페이탈 스탭 명중 시 30%, 블루밍 대거 명중시 10%의 확률로 적에게 폭발 부적을 붙인다. 0.5초 후 폭발하며, 공격력의 100%만큼 화염 속성 피해를 준다.",
	img:	"http://cfile28.uf.tistory.com/image/0214D945519D243F22276D",
	pt:		3,
	need:	8,
	job:	"어쌔신",
	move:	true,
}

skills["고요한 평온"] = {
	type:	"",
	dec:	"생명력의 자연 회복 속도가 초당 5만큼 증가한다.",
	img:	"http://cfile4.uf.tistory.com/image/2329F844519D243D22C528",
	pt:		3,
	need:	8,
	job:	"어쌔신",
	move:	true,
}

skills["단검 베기 강화3"] = {
	type:	"",
	dec:	"기본 공격 시 5%의 확률로 기본 공격 대신 복부 가르기가 발동된다. 공격력의 335%만큼 피해를 준다",
	img:	"http://cfile25.uf.tistory.com/image/257FDB40519D24411E4A73",
	pt:		2,
	need:	16,
	job:	"어쌔신",
}

skills["신출귀몰"] = {
	type:	"",
	dec:	"페이탈 스탭이 명중하면 30%의 확률로 어새신의 환영이 생성되어 추가 공격을 한다. 공격력의 200%만큼 피해를 입히고 공격력의 10%만큼 생명력을 회복한다.",
	img:	"http://cfile28.uf.tistory.com/image/2514F545519D243F209485",
	pt:		2,
	need:	16,
	job:	"어쌔신",
	move:	true,
}

skills["어둠의 올가미"] = {
	type:	"",
	dec:	"섀도우 리프가 보스를 제외한 적에게 50% 확률로 족쇄를 건다.",
	img:	"http://cfile5.uf.tistory.com/image/03293F44519D244023C5E5",
	pt:		2,
	need:	16,
	job:	"어쌔신",
	move:	true,
}

skills["독 내성"] = {
	type:	"",
	dec:	"독 속성 공격으로부터 입는 피해가 10%만큼 감소한다.",
	img:	"http://cfile7.uf.tistory.com/image/2228DD44519D243D22E168",
	pt:		2,
	need:	16,
	job:	"어쌔신",
	move:	true,
}

skills["어둠의 학살자"] = {
	type:	"",
	dec:	"중형의 적에게 가하는 모든 공격의 최종 피해가 1.1배가 된다.",
	img:	"http://cfile21.uf.tistory.com/image/2114A645519D24402110E9",
	pt:		3,
	need:	16,
	job:	"어쌔신",
	move:	true,
}

skills["무자비한 암살"] = {
	type:	"",
	dec:	"하이퍼 슬래쉬를 연속으로 사용할 수 있게 된다. 두 번째 하이퍼 슬래쉬는 공격력의 800%만큼 피해를 준다.",
	img:	"http://cfile24.uf.tistory.com/image/232A4744519D2440220AD3",
	pt:		5,
	need:	24,
	job:	"어쌔신",
	move:	true,
}

skills["독 바른 쐐기"] = {
	type:	"",
	dec:	"신속 형태 스킬이 적을 5%확률로 중독 시킨다.",
	img:	"http://cfile10.uf.tistory.com/image/02287844519D243E23E435",
	pt:		3,
	need:	24,
	job:	"어쌔신",
	move:	true,
}

skills["독 중화"] = {
	type:	"",
	dec:	"중독 상태가 3초 지속되면 50%확률로 중독이 해제가 된다.",
	img:	"http://cfile22.uf.tistory.com/image/26290144519D243E230BAD",
	pt:		5,
	need:	24,
	job:	"어쌔신",
	move:	true,
}

skills["찰나의 번뜩임"] = {
	type:	"",
	dec:	"6미터 이상의 거리에서 날아오는 공격에 의한 피해가 10%만큼 감소한다",
	img:	"http://cfile30.uf.tistory.com/image/26153445519D243F203A12",
	pt:		5,
	need:	24,
	job:	"어쌔신",
	move:	true,
}

skills["하이퍼 슬래쉬"] = {
	type:	"",
	dec:	"전방으로 12미터를 빠르게 이동하며 크게 벤다. 이동선상의 모든 적에게 공격력의 360%만큼 피해를 준다.",
	img:	"http://cfile27.uf.tistory.com/image/272A4F44519D2440215F2D",
	pt:		5,
	need:	24,
	job:	"어쌔신",
	move:	true,
}

skills["전격전"] = {
	type:	"",
	dec:	"페이탈 스탭으로 적을 죽이면 하이퍼 슬래쉬 스킬의 재사용 시간이 초기화된다.",
	img:	"http://cfile3.uf.tistory.com/image/2428C244519D243D230D59",
	pt:		5,
	need:	32,
	job:	"어쌔신",
}

skills["고독한 암살자"] = {
	type:	"",
	dec:	"하이퍼 슬래쉬의 최종 피해가 1.2배가 된다. 하이퍼 슬래쉬와 섀도우 리프가 대형 적에 명중할 때마다 정신력을 400만큼 회복한다.",
	img:	"http://cfile9.uf.tistory.com/image/23292644519D244023BE18",
	pt:		5,
	need:	32,
	job:	"어쌔신",
}

skills["무기의 달인"] = {
	type:	"",
	dec:	"공격속도가 2%만큼 증가한다.",
	img:	"http://cfile29.uf.tistory.com/image/23144D45519D244022B4DC",
	pt:		5,
	need:	32,
	job:	"어쌔신",
	move:	true,
}

// 하이프리스트

skills["디바인 볼트"] = {
	type:	"",
	dec:	"신성한 기운을 발산하여 빛의 번개를 떨군다. 공격력의 200%만큼 피해를 주고 넉백효과를 발생시킴, 그중 3명에게 낙인. 낙인효과는 10초 동안 지속",
	img:	"http://cfile2.uf.tistory.com/image/2514EE45519D276625CFBE",
	pt:		0,
	need:	0,
	job:	"하이프리스트",
	move:	true,
}

skills["홀리 레이"] = {
	type:	"",
	dec:	"신성한 빛을 발산하여 적에게 피해를 주고 아군의 힘을 배가시킴. 0.5초당 20의 정신력을 소모. 빛에 닿은 적에게 1초마다 공격력 150%만큼 피해 아군에게는 모으기 단계에 따라 버프효과를 준다.",
	img:	"http://cfile23.uf.tistory.com/image/2663453E519D27672CF47D",
	pt:		0,
	need:	0,
	job:	"하이프리스트",
	move:	true,
}

skills["신성탄 발사"] = {
	type:	"",
	dec:	"단축키를 누르는 동한 신성한 탄환을 쏘며 공격. 공격력 270%만큼 피해를 주고 명중한 적 1명마다 정신력 60만큼 회복. 낙인이 찍힌 적에게 낙인폭발을 일으킴(소형 = 150%, 중형 = 200%, 대형 = 400%)",
	img:	"http://cfile1.uf.tistory.com/image/2730CC46519D27681EA4BE",
	pt:		0,
	need:	0,
	job:	"하이프리스트",
}

skills["디바인 프로텍션"] = {
	type:	"",
	dec:	"직경 8미터의 신성 보호막을 생성하여 넉백효과를 발생시키고, 적이 영역 내로 들어올 수 없게 한다. 보호막은 6초 동안 지속.",
	img:	"http://cfile30.uf.tistory.com/image/26636F3E519D27672DA9BB",
	pt:		2,
	need:	0,
	job:	"하이프리스트",
	move:	true,
}

skills["신성탄 발사 강화1"] = {
	type:	"",
	dec:	"기본 공격 시 15% 확률로 신성탄 2발을 연속으로 발사하여 각 공격력의 210% 만큼 피해를 줌.",
	img:	"http://cfile24.uf.tistory.com/image/2230C646519D27681C2AF4",
	pt:		2,
	need:	0,
	job:	"하이프리스트",
}

skills["천벌의 기도"] = {
	type:	"",
	dec:	"디바인 볼트가 최대 6명 적에게 낙인을 찍는다.",
	img:	"http://cfile6.uf.tistory.com/image/2262CA3E519D27672C216E",
	pt:		2,
	need:	0,
	job:	"하이프리스트",
	move:	true,
}

skills["신성한 수혈"] = {
	type:	"",
	dec:	"디바인 프로텍션에 적이 닿을 때마다 공격력의 1%만큼 생명력, 정신력 20 회복",
	img:	"http://cfile3.uf.tistory.com/image/02153445519D2765240E02",
	pt:		2,
	need:	0,
	job:	"하이프리스트",
	move:	true,
}

skills["심판의 빛"] = {
	type:	"",
	dec:	"홀리 레이로 낙인이 찍힌 적을 공격하면 20%확률로 낙인이 폭발",
	img:	"http://cfile22.uf.tistory.com/image/01144D45519D2766265548",
	pt:		2,
	need:	0,
	job:	"하이프리스트",
	move:	true,
}

skills["프로텍트 오라"] = {
	type:	"",
	dec:	"자신을 포함, 주변 10미터 범위 내에 있는 아군 생명력 초당 8 회복, 30초 지속",
	img:	"http://cfile8.uf.tistory.com/image/23144545519D276626FE1A",
	pt:		2,
	need:	8,
	job:	"하이프리스트",
	move:	true,
}

skills["신성탄 발사 강화2"] = {
	type:	"",
	dec:	"기본공격시 15%확률로 적을 관통하는 신성탄을 발사. 관통 신성탄은 공격력의 420%만큼 피해를 줌",
	img:	"http://cfile24.uf.tistory.com/image/272EF446519D27691FE0AD",
	pt:		2,
	need:	8,
	job:	"하이프리스트",
}

skills["눈부신 빛"] = {
	type:	"",
	dec:	"홀리 레이 스킬을 1단계 더 모을 수 있으며 모으기 시간이 25% 감소.",
	img:	"http://cfile22.uf.tistory.com/image/22635D3E519D27672CDF7B",
	pt:		2,
	need:	8,
	job:	"하이프리스트",
	move:	true,
}

skills["단죄"] = {
	type:	"",
	dec:	"디바인 볼트가 명중하면 20% 확률로 소형과 중형의 적을 기절시킴.",
	img:	"http://cfile25.uf.tistory.com/image/21622E3E519D27672EC9BC",
	pt:		2,
	need:	8,
	job:	"하이프리스트",
	move:	true,
}

skills["신의 자비"] = {
	type:	"",
	dec:	"프로텍트 오라 효과 범위 내 아군이 받는 피해 15%(소형), 10%(중형), 5%(대형/보스) 감소",
	img:	"http://cfile1.uf.tistory.com/image/237F3A40519D276923EFAF",
	pt:		2,
	need:	8,
	job:	"하이프리스트",
	move:	true,
}

skills["신성탄 발사 강화3"] = {
	type:	"",
	dec:	"기본 공격이 대형, 보스 몬스터에 명중하면 공격력의 10%만큼 생명력을 회복",
	img:	"http://cfile27.uf.tistory.com/image/217EFC40519D2769216C80",
	pt:		2,
	need:	16,
	job:	"하이프리스트",
}

skills["신성불가침"] = {
	type:	"",
	dec:	"디바인 프로텍션의 지속시간이 8초로 증가.",
	img:	"http://cfile25.uf.tistory.com/image/2764633E519D27672C9EAF",
	pt:		2,
	need:	16,
	job:	"하이프리스트",
	move:	true,
}

skills["깨어있는 자"] = {
	type:	"",
	dec:	"수면상태가 되면 1초마다 해제를 시도. 10%의 확률로 수면상태가 해제됨",
	img:	"http://cfile1.uf.tistory.com/image/2214D945519D2765267B6C",
	pt:		3,
	need:	16,
	job:	"하이프리스트",
	move:	true,
}

skills["눈에는 눈"] = {
	type:	"",
	dec:	"프로텍트 오라 효과 범위 내에서 피해 입을 시 20% 확률로 공격자에게 낙인",
	img:	"http://cfile29.uf.tistory.com/image/247D5940519D2769220607",
	pt:		2,
	need:	16,
	job:	"하이프리스트",
	move:	true,
}

skills["성자의 걸음"] = {
	type:	"",
	dec:	"대시 사용 후 1.5초 동안 이동속도가 40%증가.",
	img:	"http://cfile3.uf.tistory.com/image/26143045519D2765264589",
	pt:		2,
	need:	16,
	job:	"하이프리스트",
	move:	true,
}

skills["피스"] = {
	type:	"",
	dec:	"적의 마음을 움직여 전의를 상실케함. 직경 17미터 내 소형, 중형의 적이 6초동안 전투행동을 하지 않는다.",
	img:	"http://cfile27.uf.tistory.com/image/0330B446519D27681D8240",
	pt:		5,
	need:	24,
	job:	"하이프리스트",
	move:	true,
}

skills["보호의 맹세"] = {
	type:	"",
	dec:	"프로텍트 오라의 생명력 회복 효과 8 추가",
	img:	"http://cfile29.uf.tistory.com/image/247F2E40519D276921516D",
	pt:		5,
	need:	24,
	job:	"하이프리스트",
	move:	true,
}

skills["예속"] = {
	type:	"",
	dec:	"피스 사용 시, 50% 확률로 적을 아군으로 만든다. 대형, 보스몬스터는 영향을 받지 않으며 효과는 8초 동안 지속됨.",
	img:	"http://cfile26.uf.tistory.com/image/23152845519D276624976F",
	pt:		5,
	need:	24,
	job:	"하이프리스트",
	move:	true,
}

skills["성자의 기도"] = {
	type:	"",
	dec:	"회복 형태 스킬의 회복 효과가 10%만큼 증가.",
	img:	"http://cfile6.uf.tistory.com/image/0130A246519D27681ED402",
	pt:		5,
	need:	24,
	job:	"하이프리스트",
	move:	true,
}

skills["축복받은 성자"] = {
	type:	"",
	dec:	"대형, 보스 몬스터의 공격을 10% 확률로 무효화.",
	img:	"http://cfile22.uf.tistory.com/image/2714A645519D276626D071",
	pt:		3,
	need:	24,
	job:	"하이프리스트",
	move:	true,
}

skills["완전한 축복"] = {
	type:	"",
	dec:	"힐 사용 시 기절, 족쇄, 수면 상태를 함께 치유",
	img:	"http://cfile29.uf.tistory.com/image/01154045519D2766256F42",
	pt:		5,
	need:	32,
	job:	"하이프리스트",
	move:	true,
}

skills["위대한 성역"] = {
	type:	"",
	dec:	"디바인 프로텍트 범위 내에 있는 아군이 받는 피해 40% 감소, 모든 상태이상 효과 무효화",
	img:	"http://cfile7.uf.tistory.com/image/2460CC3E519D27672ECABE",
	pt:		5,
	need:	32,
	job:	"하이프리스트",
	move:	true,
}

// 캐논 블래이저

skills["그레네이드 샷"] = {
	type:	"",
	dec:	"폭약을 실은 유탄을 발사해 적 1명을 공격. 유탄은 공격력의 200%만큼 화염 속성 피해를 주고 5% 확률로 발화 시킨다. 단축키를 연타하면 3회 연속해서 발사된다.",
	img:	"http://cfile21.uf.tistory.com/image/272BC03C519D6545231845",
	pt:		0,
	need:	0,
	job:	"캐논블레이저",
	move:	true,
}

skills["부스트 캐논"] = {
	type:	"",
	dec:	"캐논건의 고속 사격 모드를 발동한다. 사용 즉시 정신력이 100만큼 회복되고 4초 동안 캐논건 발사의 공격속도가 50% 증가하며 그레네이드 샷의 재사용 시간이 초기화 된다.",
	img:	"http://cfile9.uf.tistory.com/image/242F593C519D65461E9C75",
	pt:		0,
	need:	0,
	job:	"캐논블레이저",
}

skills["캐논건 발사"] = {
	type:	"",
	dec:	"기본 공격 버튼을 누르고 있는 동안 적 5명을 공격하는 산탄을 발사하여 공격력의 128%만큼 피해를 준다.",
	img:	"http://cfile22.uf.tistory.com/image/03673F3A519D654E328597",
	pt:		0,
	need:	0,
	job:	"캐논블레이저",
}

skills["개틀링 터렛"] = {
	type:	"",
	dec:	"기관총이 장착된 포대 2개를 설치한다. 0.5초마다 공격력의 30%만큼 피해를 준다. 포대는 6초간 지속된다.",
	img:	"http://cfile28.uf.tistory.com/image/012F543C519D65461D7F6B",
	pt:		2,
	need:	0,
	job:	"캐논블레이저",
	move:	true,
}

skills["캐논건 발사 강화1"] = {
	type:	"",
	dec:	"기본공격 시 10% 확률로 2단 발사가 발동한다. 각각 공격력의 128%, 64%만큼 피해를 준다.",
	img:	"http://cfile10.uf.tistory.com/image/25046A3A519D654E017415",
	pt:		2,
	need:	0,
	job:	"캐논블레이저",
}

skills["재빠른 장전"] = {
	type:	"",
	dec:	"부스트 캐논의 시전속도가 100% 증가하고, 부스트 캐논 사용 직후 캐논건 발사가 적에게 넉백 효과를 준다.",
	img:	"http://cfile9.uf.tistory.com/image/2428903C519D6548279C7A",
	pt:		3,
	need:	0,
	job:	"캐논블레이저",
	move:	true,
}

skills["폭발탄 장전"] = {
	type:	"",
	dec:	"그레네이드 샷이 대형의 적에게 가하는 최종 피해가 1.1배가 된다.",
	img:	"http://cfile3.uf.tistory.com/image/2139A839519D654B26BE5C",
	pt:		3,
	need:	0,
	job:	"캐논블레이저",
	move:	true,
}

skills["캐논건 발사 강화2"] = {
	type:	"",
	dec:	"기본공격 시 10% 확률로 2단 견제 사격이 발동된다. 각각 공격력의 128%, 64% 만큼 피해를 주고, 넉백 효과를 발생시킨다.",
	img:	"http://cfile3.uf.tistory.com/image/2669CF3A519D654E301870",
	pt:		2,
	need:	8,
	job:	"캐논블레이저",
}

skills["탄창 교체"] = {
	type:	"",
	dec:	"캐틀링 터렛이 명중할 때마다 정신력을 5 회복한다.",
	img:	"http://cfile5.uf.tistory.com/image/013D5E39519D654B21D97D",
	pt:		2,
	need:	8,
	job:	"캐논블레이저",
	move:	true,
}

skills["화염 충격"] = {
	type:	"",
	dec:	"부스트 캐논을 사용한 상태에서 그레네이드 샷을 사용하면 보스를 제외한 적을 20% 확률로 기절시킨다.",
	img:	"http://cfile9.uf.tistory.com/image/022B533C519D654823D7C5",
	pt:		3,
	need:	8,
	job:	"캐논블레이저",
	move:	true,
}

skills["하단 사격"] = {
	type:	"",
	dec:	"캐틀링 터렛이 중형의 적에게 명중하면 5% 확률로 족쇄 상태를 유발한다.",
	img:	"http://cfile26.uf.tistory.com/image/272C833C519D6544218094",
	pt:		3,
	need:	8,
	job:	"캐논블레이저",
	move:	true,
}

skills["캐논건 발사 강화3"] = {
	type:	"",
	dec:	"소형의 적에게 기본 공격이 명중했을 때 정신력을 15만큼 추가 회복한다.",
	img:	"http://cfile23.uf.tistory.com/image/0369A83A519D654E30B0D1",
	pt:		3,
	need:	16,
	job:	"캐논블레이저",
}

skills["고도의 집중력"] = {
	type:	"",
	dec:	"부스트 캐논의 효과 지속시간이 1초 증가하며, 사용한 상태에서 힘을 모으는 모든 스킬의 모으기 시간이 30% 감소한다.",
	img:	"http://cfile21.uf.tistory.com/image/212C3D3C519D654423B9E0",
	pt:		2,
	need:	16,
	job:	"캐논블레이저",
	move:	true,
}

skills["불사르는 자"] = {
	type:	"",
	dec:	"발화 상태의 적에게 그레네이드 샷이 명중하면 추가 폭발이 일어나 대상을 포함한 주변의 적들에게 공격력의 100% 만큼 추가 피해를 준다.",
	img:	"http://cfile8.uf.tistory.com/image/232FD43C519D65451ECE5B",
	pt:		2,
	need:	16,
	job:	"캐논블레이저",
	move:	true,
}

skills["정조준"] = {
	type:	"",
	dec:	"족쇄 상태의 적에게 가하는 모든 공격이 50% 추가 피해를 준다.",
	img:	"http://cfile9.uf.tistory.com/image/02392E39519D654B26C286",
	pt:		2,
	need:	16,
	job:	"캐논블레이저",
	move:	true,
}

skills["섬멸"] = {
	type:	"",
	dec:	"캐틀링 터렛의 포대 수가 1개 증가한다.",
	img:	"http://cfile24.uf.tistory.com/image/0234463C519D654A16DC68",
	pt:		2,
	need:	16,
	job:	"캐논블레이저",
	move:	true,
}

skills["슈퍼 네이팜"] = {
	type:	"",
	dec:	"전방으로 소이탄을 발사하며, 단축키를 누르고 있으면 단계별로 강화된다. 즉시 발사는 공격력의 600%만큼 피해를 주며, 모으기 1단계부터 전방에 있는 넉백 저항이 없는 적을 모으고, 탄환이 지나간 자리에 화염지대가 생성된다.",
	img:	"http://cfile25.uf.tistory.com/image/032DEC3C519D654A2134D7",
	pt:		3,
	need:	24,
	job:	"캐논블레이저",
	move:	true,
}

skills["개량 고속탄"] = {
	type:	"",
	dec:	"모든 기교 형태 스킬의 공격속도가 3% 증가한다.",
	img:	"http://cfile24.uf.tistory.com/image/0229883C519D65452753E7",
	pt:		3,
	need:	24,
	job:	"캐논블레이저",
	move:	true,
}

skills["숨 죽인 살기"] = {
	type:	"",
	dec:	"힘을 모으는 스킬의 모으기 단계가 1단계 늘어난다",
	img:	"http://cfile25.uf.tistory.com/image/272E533C519D65451FC580",
	pt:		5,
	need:	24,
	job:	"캐논블레이저",
	move:	true,
}

skills["탈출의 명수"] = {
	type:	"",
	dec:	"족쇄 상태가 되면 0.5초마다 해제를 시도한다. 10%의 확률로 족쇄가 해제 된다.",
	img:	"http://cfile8.uf.tistory.com/image/252C4F3C519D654523D587",
	pt:		5,
	need:	24,
	job:	"캐논블레이저",
	move:	true,
}

skills["전광석화"] = {
	type:	"",
	dec:	"이동속도가 5%만큼 상승한다.",
	img:	"http://cfile25.uf.tistory.com/image/223C2839519D654C219206",
	pt:		5,
	need:	24,
	job:	"캐논블레이저",
	move:	true,
}

skills["융단폭격"] = {
	type:	"",
	dec:	"슈퍼 네이팜의 재사용시간이 15초 감소한다.",
	img:	"http://cfile7.uf.tistory.com/image/022A363C519D6545260654",
	pt:		5,
	need:	32,
	job:	"캐논블레이저",
}

skills["맹렬한 포술사"] = {
	type:	"",
	dec:	"캐틀링 터렛, 슈퍼 네이팜이 보스를 제외한 적에게 가하는 최종 피해가 1.2배가 된다. 캐틀링 터렛이 사라질 때 터렛이 폭발하여 터렛 개수당 공격력의 300%만큼의 추가 피해를 준다.",
	img:	"http://cfile26.uf.tistory.com/image/212F263C519D65481FD6F7",
	pt:		5,
	need:	32,
	job:	"캐논블레이저",
}

skills["화약 전문가"] = {
	type:	"",
	dec:	"캐논블레이저의 기본공격, 그레네이드 샷, 슈퍼 네이팜의 공격 속도가 10% 증가합니다.",
	img:	"http://cfile1.uf.tistory.com/image/22316C3C519D654A1AFBEC",
	pt:		5,
	need:	32,
	job:	"캐논블레이저",
	move:	true,
}

for (var i in skills)
{
	skills[i].name = i;
}