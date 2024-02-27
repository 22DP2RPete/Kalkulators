package rvt;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import rvt.temp.A;

@Controller
public class DefaultController {
    
//    @GetMapping(value = "/")
//     String index(@RequestParam(name="name", required=false, defaultValue="null") String name, Model model) {
//         return "index";
//     }

//     @GetMapping(value = "/test")
//     ModelAndView testAction()
//     {
//         ModelAndView modelAndView = new ModelAndView("test");

//         String name = "john";
//         int age = 20;
//         Money macins1 = new Money(21, 90);
//         Money macins2 = new Money(30, 8);
//         Money macins3 = new Money(23, 67);

//         modelAndView.addObject("macins1", macins1);
//         modelAndView.addObject("macins2", macins2);
//         modelAndView.addObject("summa", macins1.plus(macins2));
//         modelAndView.addObject("name", name);
//         modelAndView.addObject("age", age);
//         modelAndView.addObject("lessThan", macins3.lessThan(macins1));

//         return modelAndView;
//     }
@GetMapping(value = "/test")
@ResponseBody
public String testAction() {
    A a = new A();
    return a.a();
}
}