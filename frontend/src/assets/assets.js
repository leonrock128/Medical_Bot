import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Girish Bathina',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS & MD Internal Medicine',
        experience: '10+ Years',
        about: 'Dr. Girish Bathina is a General Physician at Union Hospital, Governor Peta, with 10 years of experience. He specializes in accurate diagnosis and empathetic patient care. Dr. Bathina holds an MBBS and MD in Internal Medicine, has participated in research, published papers, and received awards in his field.',
        fees: 50,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Chandana Veeramachaneni',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS(OBG)',
        experience: '10+ Years',
        about: 'Dr. Chandana completed her MBBS at Sri Devrajurs Medical College and MS in Obstetrics & Gynaecology at JJM Medical College. She has served as Assistant Professor at SVIMS and currently at Pinnamaneni Siddhartha Institute of Medical Sciences. Skilled in procedures such as cervical biopsy, hysterectomy, C-section, and laparoscopy, she also conducts academic seminars. Certified in Obstetric and Gynecological Ultrasound by AOFOG, she founded Swarupa Fertility & Maternity Centre in 2014, where she has helped couples conceive through IUI, IVF, and natural methods. Her passion for fertility care led to opening a dedicated IVF unit in her multi-speciality hospital, supporting childless couples in achieving parenthood.',
        fees: 60,
        address: {
            line1: 'Kaleswararao Road',
            line2: 'Suryaraopet, Vijayawada'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Kavya Chennamsetty',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '10+ Years',
        about: 'Dr. Kavya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc4',
        name: 'DR. Guru Prasad Peruri',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD, DM',
        experience: '10+ Years',
        about: 'Dr. Prasad has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc5',
        name: 'DR. Ganta Srinivas Rao',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '10+ Years',
        about: 'Dr. Srinivas Rao has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc6',
        name: 'DR. Naveen Thota',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DM',
        experience: '10+ Years',
        about: 'Dr. Naveen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Kalyan Chakravarthy Koganti',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '10+ Years',
        about: 'Dr.Kalyan Chakravarthy Koganti graduated from Guntur Medical College and completed his post-graduation at Manipal Academy of Higher Education. He earned a PG certificate in Infectious Diseases from the London School of Hygiene and Tropical Medicine, UK, and is the first ID specialist of the state. He founded the Center for Infectious Diseases at Help Hospital, Guntur, and in 2019 started Samishta Hospital and Research Institute (SHRI) with AP’s first advanced ICU and fever clinic. SHRI features a state-of-the-art microbiology lab with automated systems and AI-powered patient monitoring. He has presented research on dengue, COVID, and antimicrobial resistance at international conferences. His work combines advanced diagnostics, patient care, and cutting-edge technology in infectious disease management',
        fees: 50,
        address: {
            line1: '4/5, Arundelpet,Donka Road',
            line2: 'Guntur, Andhra Pradesh 522002'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Priya Nandana Alaparthi',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS, DGO',
        experience: '10+ Years',
        about: 'Dr. Priya Nandana Alaparthi is an experienced Obstetrician and Gynecologist with 18 years of practice, currently at Ramesh Hospitals, Guntur. She completed her MBBS from Mamata Medical College, Khammam, DGO from Kakatiya Medical College, Warangal, and MS in Obstetrics & Gynaecology from Katuri Medical College, Guntur. Her expertise includes painless normal delivery, pregnancy care, gynecology consultations, nuchal translucency scans, and related treatments.',
        fees: 60,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc9',
        name: 'DR. Neelakanta Rasineni',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '10+ Years',
        about: 'Dr. Neelakanta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc10',
        name: 'DR. Pragati Posem',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD',
        experience: '10+ Years',
        about: 'Dr. Pragati has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc11',
        name: 'DR. Anil Kumar Devanaboina',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DM',
        experience: '10+ Years',
        about: 'Dr. Anil Kumar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc12',
        name: 'DR. Harikrishna Paladugu',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD, DM',
        experience: '10+ Years',
        about: 'Dr. Hari has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Lolini Roopa Kolli',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS & MD',
        experience: '10+ Years',
        about: 'Dr. Roopa Kolli is a compassionate and skilled General Physician in Vijayawada, known for her holistic, patient-centered approach. She completed her MBBS from Dr. Pinnamaneni Siddhartha Institute of Medical Sciences, Vijayawada, and MD in General Medicine from Katuri Medical College, Guntur. Dr. Roopa prioritizes listening to her patients to understand their health concerns and provides a safe, supportive environment. With expertise in internal medicine and diabetes care, she diagnoses and treats a wide range of health issues. She stays updated with the latest medical advancements to deliver the best care. Her empathy and dedication have earned her recognition among the top general medicine doctors in Vijayawada.',
        fees: 50,
        address: {
            line1: 'Kodandarami Reddy St,Governor Peta',
            line2: 'Vijayawada,Andhra Pradesh - 520002'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. K.Hema Prasanna',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '10+ Years',
        about: 'Dr. Hema Prasanna is an experienced Obstetrician and Gynecologist with 18 years of practice, currently at Ramesh Hospitals, Guntur. She completed her MBBS from Mamata Medical College, Khammam, DGO from Kakatiya Medical College, Warangal, and MS in Obstetrics & Gynaecology from Katuri Medical College, Guntur. Her expertise includes painless normal delivery, pregnancy care, gynecology consultations, nuchal translucency scans, and related treatments.',
        fees: 60,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
    {
        _id: 'doc15',
        name: 'DR. P. Ranganadh',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '10+ Years',
        about: 'Dr. Ranganadh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: 'D.No: 29, 4-7, Kodandarami Reddy St',
            line2: ' Governorpeta, Vijayawada - 520002'
        }
    },
]