import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles : any =[
    {title : "BLOG A : Ophthalmology",image : "assets/images/blog/blog_01.jpg",description : "Ophthalmologists are physicians who specialize in the eye and related structures. They perform medical and surgical eye care and may also write prescriptions "},
    {title : "BLOG B : Surgery medicine",image : "assets/images/blog/blog_02.jpg",description : "Surgery is a medical specialty that uses operative manual and instrumental techniques on a person to investigate or treat a pathological condition such as a disease or injury, to help improve bodily function, appearance, or to repair unwanted ruptured areas"},
    {title : "BLOG C : Radiology",image : "assets/images/blog/blog_03.jpg",description : "Radiology is the medical discipline that uses medical imaging to diagnose diseases and guide their treatment, within the bodies of humans and other animals."},
    {title : "BLOG D : Lithotripsy medicine",image : "assets/images/blog/lithos.png",description : "Lithotripsy is a noninvasive (the skin is not pierced) procedure used to treat kidney stones that are too large to pass through the urinary tract."},
    {title : "BLOG E : Resuscitation medicine",image : "assets/images/blog/reanit.jpg",description : "Resuscitation is a rapidly evolving area that crosses the boundaries of emergency medicine, intensive care medicine, anaesthesia and acute medicine"},
    {title : "BLOG F : Corona medicine",image : "assets/images/blog/covid.jpg",description : "Most people with COVID-19 have mild illness and can recover at home. You can treat symptoms with over-the-counter medicines, such as acetaminophen (Tylenol)"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
