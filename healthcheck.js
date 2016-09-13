window.addEventListener("load", function(){

			document.getElementById("ano").addEventListener("click",start,false);
			document.getElementById("ayes").addEventListener("click",astart,false);

			document.getElementById("bno").addEventListener("click",bstart,false);
			document.getElementById("byes").addEventListener("click",bbstart,false);

			document.getElementById("cno").addEventListener("click",cstart,false);
			document.getElementById("cyes").addEventListener("click",ccstart,false);

			document.getElementById("dno").addEventListener("click",dstart,false);
			document.getElementById("dyes").addEventListener("click",ddstart,false);

			document.getElementById("eno").addEventListener("click",estart,false);
			document.getElementById("eyes").addEventListener("click",eestart,false);

			document.getElementById("fno").addEventListener("click",fstart,false);
			document.getElementById("fyes").addEventListener("click",ffstart,false);

			document.getElementById("gno").addEventListener("click",gstart,false);
			document.getElementById("gyes").addEventListener("click",ggstart,false);

			document.getElementById("hno").addEventListener("click",hstart,false);
			document.getElementById("hyes").addEventListener("click",hhstart,false);

			document.getElementById("ino").addEventListener("click",istart,false);
			document.getElementById("iyes").addEventListener("click",iistart,false);

			document.getElementById("jno").addEventListener("click",jstart,false);
			document.getElementById("jyes").addEventListener("click",jjstart,false);

			document.getElementById("kno").addEventListener("click",kstart,false);
			document.getElementById("kyes").addEventListener("click",kkstart,false);

			document.getElementById("lno").addEventListener("click",lstart,false);
			document.getElementById("lyes").addEventListener("click",llstart,false);

			document.getElementById("mno").addEventListener("click",mstart,false);
			document.getElementById("myes").addEventListener("click",mmstart,false);

			document.getElementById("nno").addEventListener("click",nstart,false);
			document.getElementById("nyes").addEventListener("click",nnstart,false);

			document.getElementById("ono").addEventListener("click",ostart,false);
			document.getElementById("oyes").addEventListener("click",oostart,false);
			
			

},false);

function start(){

document.getElementById("a3").innerHTML = "Go to Question 2.*";


}

function astart(){


document.getElementById("a11").innerHTML = "2. Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?";
document.getElementById("a12").innerHTML = "<input type='button' value='YES' id='' onclick='a1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("a16").innerHTML =  "<input type='button' value='NO' id='' onclick='a2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function a1start(){

document.getElementById("a13").innerHTML = "Your problem may be a HIATAL HERNIA.";
document.getElementById("a14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("a15").innerHTML =  "See your doctor. Eat smaller meals, especially at night. Don't lie down right after you eat. Use 2 or 3 pillows, or a foam wedge, or raise the head of your bed to prevent discomfort.";




}

function a2start(){


document.getElementById("a21").innerHTML = "3. Is the pain relieved by antacids?.";
document.getElementById("a26").innerHTML = "<input type='button' value='NO' id='' onclick='a3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("a22").innerHTML =  "<input type='button' value='YES' id='' onclick='a4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function a3start(){


document.getElementById("a31").innerHTML = "4. Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?";
document.getElementById("a32").innerHTML = "<input type='button' value='YES' id='' onclick='a5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function a4start(){


document.getElementById("a23").innerHTML = "Your pain may be from GASTRITIS, an ULCER or HEARTBURN; all are irritations of the stomach and esophagus.";
document.getElementById("a24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("a25").innerHTML = "Eat smaller meals and use an over-the-counter antacid. If antacids don't help, see your doctor.";



}

function a5start(){

	document.getElementById("a33").innerHTML = "Your pain may be a sign of GALLSTONES or CHOLECYSTITIS (infection of the gallbladder).";
    document.getElementById("a34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("a35").innerHTML = "See your doctor.";



}

function bstart(){

document.getElementById("b3").innerHTML = "Go to Question 4.*";


}

function bbstart(){


document.getElementById("b11").innerHTML = "2. Is there significant swelling and is the pain so intense you're unable to walk on the ankle?";
document.getElementById("b12").innerHTML = "<input type='button' value='YES' id='' onclick='b1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("b16").innerHTML =  "<input type='button' value='NO' id='' onclick='b2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function b1start(){

document.getElementById("b13").innerHTML = "You may have a FRACTURE or a severe SPRAIN.";
document.getElementById("b14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("b15").innerHTML =  "Don't walk on the injured foot. Raise the leg and place ice on the swollen area. See your doctor promptly.";




}

function b2start(){


document.getElementById("b21").innerHTML = "3. Is there swelling and a bruise, but you're still able to walk on the ankle?";
document.getElementById("b26").innerHTML = "<input type='button' value='NO' id='' onclick='b3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("b22").innerHTML =  "<input type='button' value='YES' id='' onclick='b4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function b3start(){


document.getElementById("b31").innerHTML = "*4. Do you have swelling, stiffness (especially in the morning) or pain that comes and goes in both ankles ?";
document.getElementById("b32").innerHTML = "<input type='button' value='YES' id='' onclick='b5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function b4start(){


document.getElementById("b23").innerHTML = "You may have a SPRAINED ANKLE, or a FRACTURE of the FIBULA.";
document.getElementById("b24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("b25").innerHTML = "Use ice, elevation, rest and an elastic bandage to keep the swelling under control. See your doctor if the swelling and pain continue.";



}

function b5start(){

	document.getElementById("b33").innerHTML = "You may have RHEUMATOID ARTHRITIS.";
    document.getElementById("b34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("b35").innerHTML = "See your doctor. He or she can prescribe medicine to help control the symptoms of rheumatoid arthritis.";



}


function cstart(){

document.getElementById("c3").innerHTML = "Go to Question 2.*";


}

function ccstart(){


document.getElementById("c11").innerHTML = "2. Do you have symptoms of a cold or the flu, such as fever, aches, chills, runny nose and/or cough?";
document.getElementById("c12").innerHTML = "<input type='button' value='YES' id='' onclick='c1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("c16").innerHTML =  "<input type='button' value='NO' id='' onclick='c2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function c1start(){

document.getElementById("c13").innerHTML = "Go to Question 3.*";
document.getElementById("c14").innerHTML = "";
document.getElementById("c15").innerHTML =  "";




}

function c2start(){


document.getElementById("c21").innerHTML = "3.  Do you have a cough that produces greenish, yellowish, or tan mucus, a fever and shortness of breath?";
document.getElementById("c26").innerHTML = "<input type='button' value='NO' id='' onclick='c3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("c22").innerHTML =  "<input type='button' value='YES' id='' onclick='c4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function c3start(){


document.getElementById("c31").innerHTML = "*4. Do you have a cough that produces a small amount of clear mucus, and does your chest hurt when you take a deep breath?";
document.getElementById("c32").innerHTML = "<input type='button' value='YES' id='' onclick='c5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function c4start(){


document.getElementById("c23").innerHTML = "Your symptoms may be from an infection such as PNEUMONIA.";
document.getElementById("c24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("c25").innerHTML = "Pneumonia can be a serious health problem. See your doctor right away.";



}

function c5start(){

	document.getElementById("c33").innerHTML = "You may have VIRAL BRONCHITIS. Your pain may be caused by PLEURISY, an irritation of the lining of the lung that is usually caused by a viral infection. Hard coughing may also cause pain in the muscles and chest wall.";
    document.getElementById("c34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("c35").innerHTML = "Drink plenty of fluids, and try cold medicines and/or anti-inflammatory medicines to relieve your symptoms. See your doctor if the cough continues for more than a few days or if you develop a fever.";



}


function dstart(){

document.getElementById("d3").innerHTML = "Go to Question 2.*";


}

function ddstart(){


document.getElementById("d11").innerHTML = "2. Do you have a sore throat and headache--without nasal drainage?";
document.getElementById("d12").innerHTML = "<input type='button' value='YES' id='' onclick='d1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("d16").innerHTML =  "<input type='button' value='NO' id='' onclick='d2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function d1start(){

document.getElementById("d13").innerHTML = "You may have STREP THROAT, a bacterial infection.";
document.getElementById("d14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("d15").innerHTML =  "See your doctor if the sore throat or fever lasts longer than 48 hours. He or she can do a test to find out if you have strep throat. If you do, your doctor may give you an antibiotic to treat it. You should also get plenty of rest, and drink lots of water. Gargling with warm salt water may help relieve a sore throat.";




}

function d2start(){


document.getElementById("d21").innerHTML = "3. Did your symptoms start suddenly, and do you have a combination of symptoms including muscle aches, chills, a sore throat, runny nose or cough?";
document.getElementById("d26").innerHTML = "<input type='button' value='NO' id='' onclick='d3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("d22").innerHTML =  "<input type='button' value='YES' id='' onclick='d4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function d3start(){


document.getElementById("d31").innerHTML = "4. Do you have a persistent cough that brings up yellowish or greenish mucus, wheezing and shortness of breath.";
document.getElementById("d32").innerHTML = "<input type='button' value='YES' id='' onclick='d5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function d4start(){


document.getElementById("d23").innerHTML = "You may have the FLU.";
document.getElementById("d24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("d25").innerHTML = "Get plenty of rest, and drink lots of fluids. Over-the-counter medicines may relieve some of your symptoms. Your doctor may suggest a prescription medicine that may shorten the course of the flu. Prevent the flu by getting a flu shot each fall.";



}

function d5start(){

	document.getElementById("d33").innerHTML = "You may be developing ACUTE BRONCHITIS, an infection of the airways.";
    document.getElementById("d34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("d35").innerHTML = "Get plenty of rest, and drink lots of fluids. If you smoke, cut down on the number of cigarettes you smoke, or stop smoking. Use an over-the-counter medicine for pain and fever, and an expectorant to ease the coughing. A humidifier may also relieve some symptoms. If symptoms persist or worsen, contact your doctor.";



}

function estart(){

document.getElementById("e3").innerHTML = "Go to Question 2.*";


}

function eestart(){


document.getElementById("e11").innerHTML = "2. Are you very short of breath, and are you coughing up pink, frothy mucus?";
document.getElementById("e12").innerHTML = "<input type='button' value='YES' id='' onclick='e1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("e16").innerHTML =  "<input type='button' value='NO' id='' onclick='e2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function e1start(){

document.getElementById("e13").innerHTML = "Your symptoms may be from a serious condition called PULMONARY EDEMA (fluid in the lungs).";
document.getElementById("e14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("e15").innerHTML =  "<b>EMERGENCY</b>  GO TO THE NEAREST EMERGENCY ROOM RIGHT AWAY.";




}

function e2start(){


document.getElementById("e21").innerHTML = "3. Does your cough produce clear or pale yellow mucus?";
document.getElementById("e26").innerHTML = "<input type='button' value='NO' id='' onclick='e3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("e22").innerHTML =  "<input type='button' value='YES' id='' onclick='e4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function e3start(){


document.getElementById("e31").innerHTML = "4. Does your cough produce yellow, tan or green mucus?";
document.getElementById("e32").innerHTML = "<input type='button' value='YES' id='' onclick='e5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function e4start(){


document.getElementById("e23").innerHTML = "You may have a viral illness such as a COLD or the FLU.";
document.getElementById("e24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("e25").innerHTML = "Get plenty of rest, and drink lots of fluids. Try over-the-counter medicines to treat your symptoms.";



}

function e5start(){

	document.getElementById("e33").innerHTML = "You may have an infection of the airways such as CHRONIC BRONCHITIS. If you have a fever with shaking chills and are very ill, you may have a more serious infection such as PNEUMONIA.";
    document.getElementById("e34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("e35").innerHTML = "See your doctor. He or she can prescribe medicine to relieve your symptoms. Get plenty of rest, and drink lots of fluids. If you smoke, stop smoking.";



}

function fstart(){

document.getElementById("f3").innerHTML = "Go to Question 2.*";


}

function ffstart(){


document.getElementById("f11").innerHTML = "2. Did your symptoms begin 30 minutes to 2 hours after eating or drinking dairy products?";
document.getElementById("f12").innerHTML = "<input type='button' value='YES' id='' onclick='f1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("f16").innerHTML =  "<input type='button' value='NO' id='' onclick='f2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function f1start(){

document.getElementById("f13").innerHTML = "Your symptoms may be caused by LACTOSE INTOLERANCE. People who have this condition have trouble digesting the sugar in milk and other dairy products.";
document.getElementById("f14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("f15").innerHTML =  "If you think you have lactose intolerance, talk to your doctor. He or she may recommend taking lactase enzyme tablets or drops to help prevent problems. Also, avoid eating or drinking foods and beverages that make you sick.";




}

function f2start(){


document.getElementById("f21").innerHTML = "3. Have you eaten food that might be spoiled, or did someone else eat the same food and become ill too?";
document.getElementById("f26").innerHTML = "<input type='button' value='NO' id='' onclick='f3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("f22").innerHTML =  "<input type='button' value='YES' id='' onclick='f4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function f3start(){


document.getElementById("f31").innerHTML = "4. Have you traveled recently to another country?";
document.getElementById("f32").innerHTML = "<input type='button' value='YES' id='' onclick='f5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function f4start(){


document.getElementById("f23").innerHTML = "You may have FOOD POISONING. Other symptoms of food poisoning may include headache, fever and chills, and weakness.";
document.getElementById("f24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("f25").innerHTML = "Most problems caused by food poisoning will clear up within 12 to 48 hours. In the meantime, drink plenty of fluids to avoid dehydration. Children should be given an oral rehydration solution (ORS). Avoid solid foods until the diarrhea goes away.";



}

function f5start(){

	document.getElementById("f33").innerHTML = "You may have TRAVELER'S DIARRHEA, which is caused by contaminated food or drink.";
    document.getElementById("f34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("f35").innerHTML = "Over-the-counter medicines may help relieve your symptoms. Drink plenty of fluids but avoid alcohol, caffeine and dairy products. If your symptoms persist, call your doctor.";



}

function gstart(){

document.getElementById("g3").innerHTML = "Go to Question 2.*";


}

function ggstart(){


document.getElementById("g11").innerHTML = "2. Are you experiencing pain deep in the ear and/or fluid draining from the ear?";
document.getElementById("g12").innerHTML = "<input type='button' value='YES' id='' onclick='g1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("g16").innerHTML =  "<input type='button' value='NO' id='' onclick='g2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function g1start(){

document.getElementById("g13").innerHTML = "You may have OTITIS MEDIA, an infection of the middle ear.";
document.getElementById("g14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("g15").innerHTML =  "See your doctor. Many ear infections will safely clear up on their own, but others require antibiotics.";




}

function g2start(){


document.getElementById("g21").innerHTML = "3. Do you have redness and swelling of the outer ear and the surrounding skin?";
document.getElementById("g26").innerHTML = "<input type='button' value='NO' id='' onclick='g3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("g22").innerHTML =  "<input type='button' value='YES' id='' onclick='g4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function g3start(){


document.getElementById("g31").innerHTML = "4. Do you have a headache-type pain and redness behind your ear or tenderness when you touch the bone behind your ear?";
document.getElementById("g32").innerHTML = "<input type='button' value='YES' id='' onclick='g5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function g4start(){


document.getElementById("g23").innerHTML = "Your ear canal, outer ear and the skin around your ear may be seriously INFECTED.";
document.getElementById("g24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("g25").innerHTML = "URGENT SEE YOUR DOCTOR RIGHT AWAY.";



}

function g5start(){

	document.getElementById("g33").innerHTML = "Your pain may be from MASTOIDITIS, an infection of the bone behind the ear, or from an ENLARGED LYMPH NODE.";
    document.getElementById("g34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("g35").innerHTML = "URGENT SEE YOUR DOCTOR RIGHT AWAY.";



}

function hstart(){

document.getElementById("h3").innerHTML = "You may have a SEBACEOUS CYST, a collection of oil under the skin. Sebaceous cysts are usually small and grow slowly.";


}

function hhstart(){


document.getElementById("h11").innerHTML = "2. Are your lips and eyes swollen and do you have a rash that looks like mosquito bites?";
document.getElementById("h12").innerHTML = "<input type='button' value='YES' id='' onclick='h1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("h16").innerHTML =  "<input type='button' value='NO' id='' onclick='h2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function h1start(){

document.getElementById("h13").innerHTML = "Your symptoms may be from an ALLERGIC REACTION or HIVES.";
document.getElementById("h14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("h15").innerHTML =  "If you have trouble breathing, your throat becomes tight, or the swelling becomes severe, see your doctor or go to the emergency room right away.";




}

function h2start(){


document.getElementById("h21").innerHTML = "3. Do you have a painful pink or red bump, or a group of smaller bumps on your forehead or face?";
document.getElementById("h26").innerHTML = "<input type='button' value='NO' id='' onclick='h3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("h22").innerHTML =  "<input type='button' value='YES' id='' onclick='h4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function h3start(){


document.getElementById("h31").innerHTML = "4. Do you have red, flaky, oily areas near your scalp, in the folds of your nose, or on your cheeks?";
document.getElementById("h32").innerHTML = "<input type='button' value='YES' id='' onclick='h5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function h4start(){


document.getElementById("h23").innerHTML = "You may have a skin infection such as BOILS, CARBUNCLES, or ACNE. A boil is a large, pus-filled bump. Multiple boils are called carbuncles. Acne occurs when oil glands start producing more oil and block pores. Acne can result in blackheads, whiteheads and pimples.";
document.getElementById("h24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("h25").innerHTML = "Warm compresses may help boils and carbuncles heal faster. See your doctor if you're in pain or if the infection hasn't healed in a couple of weeks. If you have acne, try using an over-the-counter acne medicine. See your doctor if the problem persists.";



}

function h5start(){

	document.getElementById("h33").innerHTML = "You may have a skin irritation caused by ACNE ROSACEA or SEBORRHEA.";
    document.getElementById("h34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("h35").innerHTML = "See your doctor.";



}





function istart(){

document.getElementById("i3").innerHTML = "Go to Question 2.*";


}

function iistart(){


document.getElementById("i11").innerHTML = "2. Have you had a fever for weeks along with tiredness and a sore throat?";
document.getElementById("i12").innerHTML = "<input type='button' value='YES' id='' onclick='i1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("i16").innerHTML =  "<input type='button' value='NO' id='' onclick='i2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function i1start(){

document.getElementById("i13").innerHTML = "You may have MONONUCLEOSIS.";
document.getElementById("i14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("i15").innerHTML =  "See your doctor. ";




}

function i2start(){


document.getElementById("i21").innerHTML = "3. Do you have a sore throat, a dry cough, tiredness, mild headaches or muscle aches?";
document.getElementById("i26").innerHTML = "<input type='button' value='NO' id='' onclick='i3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("i22").innerHTML =  "<input type='button' value='YES' id='' onclick='i4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function i3start(){


document.getElementById("i31").innerHTML = "Do you have aches, chills, nausea, vomiting, cramps or watery diarrhea?";
document.getElementById("i32").innerHTML = "<input type='button' value='YES' id='' onclick='i5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function i4start(){


document.getElementById("i23").innerHTML = "You may have a COLD or FLU.";
document.getElementById("i24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("i25").innerHTML = "Get plenty of rest and drink lots of fluids. Over-the-counter- medicines may help relieve your symptoms. See your doctor if your symptoms become severe. Prevent the flu by getting the flu vaccine in the fall.";



}

function i5start(){

	document.getElementById("i33").innerHTML = "You may have GASTROENTERITIS, an intestinal infection commonly called the STOMACH FLU.";
    document.getElementById("i34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("i35").innerHTML = "Get plenty of rest. Stop eating and drinking for a few hours to let your stomach settle. Ease back into eating gradually and start with bland foods. Take small, frequent sips of water or clear liquids to avoid dehydration. See your doctor if you have bloody diarrhea, if you've been vomiting for more than 2 days or if you're vomiting blood.";



}



function jstart(){

document.getElementById("j3").innerHTML = "Go to Question 3.*";


}

function jjstart(){


document.getElementById("j11").innerHTML = "2. Are these patches red, itchy or oily?";
document.getElementById("j12").innerHTML = "<input type='button' value='YES' id='' onclick='j1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("j16").innerHTML =  "<input type='button' value='NO' id='' onclick='j2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function j1start(){

document.getElementById("j13").innerHTML = "This type of hair loss can be caused by SEBORRHEA, LICHEN PLANUS or RINGWORM.";
document.getElementById("j14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("j15").innerHTML =  "See your doctor. ";




}

function j2start(){


document.getElementById("j21").innerHTML = "*3. Are you a man who has gradually lost hair in the front or on the top of your head and has relatives with similar hair loss?";
document.getElementById("j26").innerHTML = "<input type='button' value='NO' id='' onclick='j3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("j22").innerHTML =  "<input type='button' value='YES' id='' onclick='j4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function j3start(){


document.getElementById("j31").innerHTML = "4. Have you used any chemicals on your hair, or have you worn tight braids or cornrows recently?";
document.getElementById("j32").innerHTML = "<input type='button' value='YES' id='' onclick='j5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function j4start(){


document.getElementById("j23").innerHTML = "You may have classic MALE-PATTERN BALDNESS.";
document.getElementById("j24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("j25").innerHTML = "Over-the-counter and prescription medicines are available to treat male-pattern baldness. See your doctor. He or she will determine which treatment is right for you.";



}

function j5start(){

	document.getElementById("j33").innerHTML = "Your hair loss may be from FOLLICULAR DAMAGE.";
    document.getElementById("j34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("j35").innerHTML = "Tight braids, ponytails or cornrows can break and damage hair. Secure hair with covered rubber bands and try not to style it too tightly. Discontinue the use of harsh chemicals on the hair and scalp, which can also result in hair loss.";



}



function kstart(){

document.getElementById("k3").innerHTML = "You may have the cold or the flu or gastroenteritis (stomach flu).";


}

function kkstart(){


document.getElementById("k11").innerHTML = "2. Do you have a severe headache, stiff neck, vomiting, and does normal light hurt your eyes?";
document.getElementById("k12").innerHTML = "<input type='button' value='YES' id='' onclick='k1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("k16").innerHTML =  "<input type='button' value='NO' id='' onclick='k2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function k1start(){

document.getElementById("k13").innerHTML = "You may have meningitis, a serious infection of the fluid around your brain and spinal cord, or intracranial hemorrhage, bleeding inside the brain.";
document.getElementById("k14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("k15").innerHTML =  "See your doctor or go to the emergency room right away.";




}

function k2start(){


document.getElementById("k21").innerHTML = "3. Have you injured your head or been knocked out recently?";
document.getElementById("k26").innerHTML = "<input type='button' value='NO' id='' onclick='k3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("k22").innerHTML =  "<input type='button' value='YES' id='' onclick='k4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function k3start(){


document.getElementById("k31").innerHTML = "4. Do you have numbness, tingling or weakness in the arms and legs, or do you have trouble speaking or understanding speech?";
document.getElementById("k32").innerHTML = "<input type='button' value='YES' id='' onclick='k5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function k4start(){


document.getElementById("k23").innerHTML = "You may have a concussion, or a subdural hematoma, a serious condition caused by blood pushing on your brain.";
document.getElementById("k24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("k25").innerHTML = "See your doctor right away.";



}

function k5start(){

	document.getElementById("k33").innerHTML = "You may be having a stroke.";
    document.getElementById("k34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("k35").innerHTML = "See your doctor or go to the emergency room right away.";



}



function lstart(){

document.getElementById("l3").innerHTML = "Loud noises that result from certain types of work or entertainment may damage the inner ear. This kind of hearing loss is called OCCUPATIONAL.";


}

function llstart(){


document.getElementById("l11").innerHTML = "2. Are you experiencing partial hearing loss, along with earache and a feeling of fullness in the ear?";
document.getElementById("l12").innerHTML = "<input type='button' value='YES' id='' onclick='l1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("l16").innerHTML =  "<input type='button' value='NO' id='' onclick='l2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function l1start(){

document.getElementById("l13").innerHTML = "Earwax blockage, called CERUMINOSIS, can cause hearing loss in one or both ears.";
document.getElementById("l14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("l15").innerHTML =  "Use mineral oil, baby oil or an over-the-counter earwax removal kit to soften the wax in your ear. If wax still can't be removed, see your doctor.";




}

function l2start(){


document.getElementById("l21").innerHTML = "3. Has your hearing loss occurred gradually as you have aged?";
document.getElementById("l26").innerHTML = "<input type='button' value='NO' id='' onclick='l3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("l22").innerHTML =  "<input type='button' value='YES' id='' onclick='l4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function l3start(){


document.getElementById("l31").innerHTML = "4. Are you experiencing gradual hearing loss in one ear only?";
document.getElementById("l32").innerHTML = "<input type='button' value='YES' id='' onclick='l5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function l4start(){


document.getElementById("l23").innerHTML = "You may have PRESBYCUSIS, hearing loss related to aging and other factors.";
document.getElementById("l24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("l25").innerHTML = "See your doctor for an ear exam and a hearing test. You may benefit from a hearing aid.";



}

function l5start(){

	document.getElementById("l33").innerHTML = "You may have an ACOUSTIC NEUROMA, a noncancerous tumor on the hearing nerve.";
    document.getElementById("l34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("l35").innerHTML = "SEE YOUR DOCTOR.";



}



function mstart(){

document.getElementById("m3").innerHTML = "Go to Question 2.*";


}

function mmstart(){


document.getElementById("m11").innerHTML = "2.  Do you have dark urine and/or a yellow discoloration of your skin or eyes along with other cold and flu symptoms?";
document.getElementById("m12").innerHTML = "<input type='button' value='YES' id='' onclick='m1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("m16").innerHTML =  "<input type='button' value='NO' id='' onclick='m2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function m1start(){

document.getElementById("m13").innerHTML = "You may have HEPATITIS, a disease that causes liver inflammation and is most commonly caused by a virus.";
document.getElementById("m14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("m15").innerHTML =  "See your doctor right away. Hepatitis needs to be treated to avoid liver damage.";




}

function m2start(){


document.getElementById("m21").innerHTML = "3. Do you have cold and flu symptoms along with nausea, vomiting and/or diarrhea?";
document.getElementById("m26").innerHTML = "<input type='button' value='NO' id='' onclick='m3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("m22").innerHTML =  "<input type='button' value='YES' id='' onclick='m4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function m3start(){


document.getElementById("m31").innerHTML = "4. Do you have pain in the middle or lower right side of your abdomen, and have you lost your appetite?";
document.getElementById("m32").innerHTML = "<input type='button' value='YES' id='' onclick='m5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function m4start(){


document.getElementById("m23").innerHTML = "You may have viral GASTROENTERITIS (stomach flu).";
document.getElementById("m24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("m25").innerHTML = "Drink plenty of fluids and get rest. Use an analgesic such as acetaminophen to reduce fever. If your symptoms get worse or you don't get any better after a few days, see your doctor.";



}

function m5start(){

	document.getElementById("m33").innerHTML = "You may have APPENDICITIS, an inflammation of the appendix, or a BOWEL OBSTRUCTION.";
    document.getElementById("m34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("m35").innerHTML = "See your doctor or go to the emergency room right away. An infected appendix could rupture within 24 hours if left untreated.";



}



function nstart(){

document.getElementById("n3").innerHTML = "Go to Question 2.*";


}

function nnstart(){


document.getElementById("n11").innerHTML = "2. Do you have body aches, headache, cough or runny nose?";
document.getElementById("n12").innerHTML = "<input type='button' value='YES' id='' onclick='n1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("n16").innerHTML =  "<input type='button' value='NO' id='' onclick='n2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function n1start(){

document.getElementById("n13").innerHTML = "You probably have a COLD or FLU.";
document.getElementById("n14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("n15").innerHTML =  "Drink plenty of fluids and get plenty of rest. Children should be given nonaspirin medicine for the fever. If the cold lasts longer than two to three days, see your doctor.";




}

function n2start(){


document.getElementById("n21").innerHTML = "3. Are you vomiting or do you have nausea or diarrhea?";
document.getElementById("n26").innerHTML = "<input type='button' value='NO' id='' onclick='n3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("n22").innerHTML =  "<input type='button' value='YES' id='' onclick='n4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function n3start(){


document.getElementById("n31").innerHTML = "4. When you look at the back of your throat, do you see white patches on your tonsils?";
document.getElementById("n32").innerHTML = "<input type='button' value='YES' id='' onclick='n5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function n4start(){


document.getElementById("n23").innerHTML = "You may have viral GASTROENTERITIS, also called STOMACH FLU.";
document.getElementById("n24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("n25").innerHTML = "Drink plenty of fluids and get plenty of rest. Use an antinausea and/or antidiarrheal medicine. See your doctor if symptoms get worse, if they last longer than a week, or if you become dehydrated.";



}

function n5start(){

	document.getElementById("n33").innerHTML = "You may have STREP THROAT or MONONUCLEOSIS.";
    document.getElementById("n34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("n35").innerHTML = "See your doctor.";



}



function ostart(){

document.getElementById("o3").innerHTML = "Go to Question 2";


}

function oostart(){


document.getElementById("o11").innerHTML = "2. Do you have a fever and/or backache?";
document.getElementById("o12").innerHTML = "<input type='button' value='YES' id='' onclick='o1start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("o16").innerHTML =  "<input type='button' value='NO' id='' onclick='o2start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";

}

function o1start(){

document.getElementById("o13").innerHTML = "Pain and fever may be caused by an infection of the kidneys called PYELONEPHRITIS.";
document.getElementById("o14").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
document.getElementById("o15").innerHTML =  "See your doctor right away.";




}

function o2start(){


document.getElementById("o21").innerHTML = "3. Do you have sharp, knife-like, intense pains in your back or groin?";
document.getElementById("o26").innerHTML = "<input type='button' value='NO' id='' onclick='o3start()' /><br><img src='images/arrow_down.png' width='40px' height='40px' />";
document.getElementById("o22").innerHTML =  "<input type='button' value='YES' id='' onclick='o4start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";


}

function o3start(){


document.getElementById("o31").innerHTML = "4. Are you a man, and do you have an ache under your scrotum?";
document.getElementById("o32").innerHTML = "<input type='button' value='YES' id='' onclick='o5start()' /><img src='images/arrow_right1.png' width='40px' height='40px' />";




}

function o4start(){


document.getElementById("o23").innerHTML = "YYou may have a KIDNEY STONE or another serious problem.";
document.getElementById("o24").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' /> ";
document.getElementById("o25").innerHTML = "See your doctor or go to the emergency room right away.";



}

function o5start(){

	document.getElementById("o33").innerHTML = "You may have PROSTATITIS, an infection of the prostate gland.";
    document.getElementById("o34").innerHTML = "<img src='images/arrow_right1.png' width='40px' height='40px' />";
    document.getElementById("o35").innerHTML = "See your doctor.";



}


