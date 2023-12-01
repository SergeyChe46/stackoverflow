import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostsService } from './helpers/services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  get postTitle(): FormControl {
    return this.postForm.get('title') as FormControl;
  }

  onSubmit() {
    let postTitle = this.postTitle.value;

    this.postService.addPost(postTitle).subscribe({
      error: (error) => console.log(error),
    });
  }

  title = 'stackoverflow';
  postForm!: FormGroup;

  menuItem: string[] = ['Main', 'About', 'Contacts'];
}
